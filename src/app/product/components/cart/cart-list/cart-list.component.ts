import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../../../cart.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: Array<Product>;
  orders = ['price', 'quantity', 'name'];
  selectedOrder = 'price';

  // directions = ['true', 'false'];
  // direction = 'true';

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  getProductsFromCart(): Product[] {
    return this.cartService.getAddedProducts();
  }

  onRemoveItem(product: Product): void {
    console.log('On remove click:', product);
    this.cartService.removeProductFromCart(product);
  }

  onChangeQuantity(product: Product): void {
    console.log('On update click:', product);
    this.cartService.updateProduct(product);
  }

  onRemoveAll(): void {
    this.cartService.removeAll();
  }

}
