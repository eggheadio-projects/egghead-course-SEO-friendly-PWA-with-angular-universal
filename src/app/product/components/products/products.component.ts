import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  template: `
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-3" *ngFor="let product of products">
        <app-product [product]="product" [details]="false"></app-product>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  @Input() public products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
