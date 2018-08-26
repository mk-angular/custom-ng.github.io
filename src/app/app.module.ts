import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { UsageComponent } from './usage/usage.component';
import { CardItemDirective } from './directive/card-item.directive';
import { ListItemDirective } from './directive/list-item.directive';
import { WowComponent } from './wow/wow.component';
import { MyformComponent } from './myform/myform.component';
import { UtilService } from './util.service';
import { NumberDirective } from './myform/number.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CardOrListViewComponent, UsageComponent, CardItemDirective, ListItemDirective, WowComponent, MyformComponent, NumberDirective ],
  providers: [ UtilService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
