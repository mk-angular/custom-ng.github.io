import { Component, Input, ContentChild, TemplateRef, AfterContentChecked } from '@angular/core';
import { CardItemDirective } from '../directive/card-item.directive';
import { ListItemDirective } from '../directive/list-item.directive';

@Component({
  selector: 'card-or-list-view',
  template:`
  <ng-container [ngSwitch]="mode">
    <ng-container *ngSwitchCase="'card'">
      <div *ngFor="let item of items">
        <ng-container *ngTemplateOutlet="cardItemTemplate; context: {$implicit: item}"></ng-container>
      </div>
    </ng-container>
    <ul *ngSwitchCase="'list'">
      <li *ngFor="let item of items">
        <ng-container *ngTemplateOutlet="listItemTemplate; context: {$implicit: item}"></ng-container>
      </li>
    </ul>
  </ng-container>
  `
})
export class CardOrListViewComponent {
  @Input() items: any[] = [];
  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, { read: TemplateRef }) cardItemTemplate: CardItemDirective;
  @ContentChild(ListItemDirective, { read: TemplateRef }) listItemTemplate: ListItemDirective;

  ngDoCheck() {
    console.log(this.cardItemTemplate);
    console.log(this.listItemTemplate);
  }

  ngAfterContentInit () {
    console.log(this.cardItemTemplate);
    console.log(this.listItemTemplate);
  }
}