import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../util.service';
import { nameLengthCheck } from './validator';
import { NumberDirective } from './number.directive';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  form: FormGroup;
  formErrors = {
    'username':'',
    'account': '',
    'name':'',
    'email':'',
    'password':'',
    'passwordConfirmation':'',
  };
  formErrorMessages = {
    'username': {
      'required': 'Username is required!',
      'pattern': 'Should be 4-12 characters!',
    },
    'account': {
      'required': 'Account is required!',
    },
    'name': {
      'required': 'Name is required!',
      'pattern': 'Should be 4-12 characters!',
    },
    'email': {
      'pattern': 'Should be a vaild email address!',
    },
    'password': {
      'required': 'Password is required!',
      'pattern': 'Should be minimum 8 characters of alphabet and number combination!',
    },
    'passwordConfirmation': {
      'required': 'Password Confirmation is required!',
      'match': 'Password Confirmation does not matched!',
    },
  };

  constructor(
    private fb: FormBuilder,
    private utilService: UtilService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.fb.group({
      username: ['', nameLengthCheck(4)],
      account: ['', Validators.required],
      name:["", [Validators.required, Validators.pattern(/^.{4,12}$/)]],
      email:["", [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password:["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)]],
      passwordConfirmation:["", [Validators.required]],
    }, {
      validator: this.customValidation
    });

    // this.form.valueChanges.subscribe(data => {
    //   this.utilService.updateFormErrors(this.form, this.formErrors, this.formErrorMessages);
    // })
  }

  customValidation(group: FormGroup) {
    var password = group.get('password');
    var passwordConfirmation = group.get('passwordConfirmation');
    if(password.dirty && passwordConfirmation.dirty && password.value != passwordConfirmation.value){
        passwordConfirmation.setErrors({'match': true});
    }
  }

  submit() {
    console.log(this.form);
  }

}
