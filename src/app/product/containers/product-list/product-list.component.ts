import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-product-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private route: ActivatedRoute, private ui: UiService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['products']),
        tap(products => this.metaData(products)),
      )
      .subscribe(res => this.products = res);
  }

  metaData(products: Product[]) {
    this.ui.setMetaData({
      title: 'Products',
      description: `Check out our collection of ${products.length} products`
    });
  }
}
