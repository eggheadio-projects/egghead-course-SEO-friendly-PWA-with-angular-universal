import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-product-detail',
  template: `
    <app-product [product]="product" [details]="true"></app-product>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private ui: UiService,
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['product']),
        tap(product => this.metaData(product)),
      )
      .subscribe(res => this.product = res);
  }

  metaData(product: Product) {
    this.ui.setMetaData({
      title: `${product.name} for only $${product.price}`,
      description: product.description,
      image: product.image,
    });
  }
}
