import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public itemsCount = 0;
  public totalPrice = 0;

  productsFromCart = new Array<Product>();

  constructor() { }

  addToCart(product: Product) {
    const cartItem = { ...product };
    this.productsFromCart.push(cartItem);
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

  updateProduct(product: Product) {
    const line = this.productsFromCart.find(item => item === product);
    if (line !== undefined) {
      line.quantity = Number(product.quantity);
    }
    this.getCountAndTotal();
  }

  getCountAndTotal(): void {
    this.itemsCount = this.productsFromCart.length;
    this.totalPrice = 0;
    this.productsFromCart.forEach(l => {
      this.totalPrice += (l.quantity * l.price);
    });
  }
}
