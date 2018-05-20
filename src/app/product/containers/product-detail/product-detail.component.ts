import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    {{ product | json }}
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product.id = this.route.snapshot.paramMap.get('id');
  }

}
