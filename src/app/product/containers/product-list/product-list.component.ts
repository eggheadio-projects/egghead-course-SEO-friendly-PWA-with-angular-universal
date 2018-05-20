import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['products'])
      )
      .subscribe(res => this.products = res);
  }

}
