import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';
import { CartServiceModule } from '../cart-service.module';

@Injectable({
  providedIn: CartServiceModule
})
export class CartService {

  public itemsCount = 0;
  public totalPrice = 0;

  productsFromCart = new Array<ProductModel>();

  constructor() { }

  addToCart(product: ProductModel) {
    this.productsFromCart = [...this.productsFromCart, {...product}];
    this.getCountAndTotal();
  }

  getAddedProducts(): Array<ProductModel> {
    this.getCountAndTotal();
    return this.productsFromCart;
  }

  isCartEmpty(): boolean {
    return !!this.productsFromCart.length;
  }

  removeProductFromCart(product: ProductModel) {
    const pos = this.productsFromCart.indexOf(product);
    this.productsFromCart.splice(pos, 1);
    this.productsFromCart = [...this.productsFromCart];
    this.getCountAndTotal();
  }

  updateProduct(product: ProductModel) {
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

  removeAll(): void {
    this.productsFromCart = [];
    this.getCountAndTotal();
  }
}
