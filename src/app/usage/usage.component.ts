import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  template: `
  <card-or-list-view [items]="items" [mode]="mode">
    <ng-template cardItem let-item>
        <h1>{{item.header}}</h1>
        <p>{{item.content}}</p>
    </ng-template>
    <ng-template listItem let-item>
      <p> {{item.header}}: {{item.content}} </p>
    </ng-template>
  </card-or-list-view>
  `
})
export class UsageComponent implements OnInit {

  mode = "card";
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}