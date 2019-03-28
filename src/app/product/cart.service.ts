import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsFromCart = new Array<Product>();
  
  constructor() { }

  addToCart(product: Product) {
    this.productsFromCart.push(product);
  }

  getAddedProducts(): Array<Product> {
    return this.productsFromCart;
  }
}
