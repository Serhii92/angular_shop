import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: Array<Product>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getAddedProducts();
  }

  onRemoveItem(product: Product): void {
    console.log('On remove click:', product);
    this.cartService.removeProductFromCart(product)
  }

}
