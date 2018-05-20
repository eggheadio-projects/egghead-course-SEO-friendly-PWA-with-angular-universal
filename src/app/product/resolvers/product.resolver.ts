import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product> {
  constructor(private service: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getProduct(route.paramMap.get('id'));
  }
}
