import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a routerLink="/" class="navbar-brand">
        <img [attr.src]="logo" [attr.alt]="title" width="30" height="30">
        {{title}}
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-item nav-link" *ngFor="let link of links"
            [routerLink]="link.url" routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }">
            {{ link.label }}
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Store';
  public links = [{
    label: 'Products',
    url: '/products',
  }];
  constructor() { }

  ngOnInit() {
  }

}
