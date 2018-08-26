import { Directive, HostListener, Input, Inject, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[number]',
})
export class NumberDirective {

  constructor( 
    private el: ElementRef
  ) { }

  @HostListener('focusout', ['$event'])
  onMounseLeave() {
    let currentValue = this.el.nativeElement.value;
    this.el.nativeElement.value = currentValue.replace(/[^0-9.,]/g, '');
  }

}
