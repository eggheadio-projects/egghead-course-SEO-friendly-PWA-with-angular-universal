import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  template: `
    {{ product | json }}
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.service.getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => this.product = res);
  }

}
