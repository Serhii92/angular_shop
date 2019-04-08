import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public itemsCount: number = 0;
  public totalPrice: number = 0;

  productsFromCart = new Array<Product>();

  constructor() { }

  addToCart(product: Product) {
    this.productsFromCart.push(product);
    this.getCountAndTotal();
  }

  getAddedProducts(): Array<Product> {
    this.getCountAndTotal();
    return this.productsFromCart;
  }

  removeProductFromCart(product: Product) {
    const pos = this.productsFromCart.indexOf(product);
    this.productsFromCart.splice(pos, 1);
    this.getCountAndTotal();
  }

  getCountAndTotal(): void {
    this.itemsCount = this.productsFromCart.length;;
    this.totalPrice = 0;
    this.productsFromCart.forEach(l => {
      this.totalPrice += (1 * l.price);
    })
  }
}
