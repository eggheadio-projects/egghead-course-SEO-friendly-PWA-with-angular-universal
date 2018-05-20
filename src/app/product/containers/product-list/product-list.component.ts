import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  template: `
    {{products | json}}
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}
