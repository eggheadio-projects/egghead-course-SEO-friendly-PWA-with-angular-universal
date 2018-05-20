import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  template: `
    <div class="card">
      <div class="card-header">
        <h4 class="my-2">
          <ng-container *ngIf="details; else link">
            {{product.name}}
          </ng-container>
          <ng-template #link>
            <a [routerLink]="product.id">{{product.name}}</a>
          </ng-template>
        </h4>
      </div>
      <img [attr.src]="product.image" [attr.alt]="product.name" class="card-img">
      <div class="card-body" *ngIf="details">
        <p class="my-2">{{product.description}}</p>
      </div>
      <div class="card-footer">
        <h4 class="text-right my-2">{{product.price}}</h4>
      </div>
    </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Input() public details: boolean;
  constructor() { }

  ngOnInit() {
  }

}
