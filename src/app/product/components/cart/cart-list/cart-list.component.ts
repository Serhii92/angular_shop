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

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getAddedProducts();
  }

  onRemoveItem(product: Product): void {
    console.log('On remove click:', product);
    this.cartService.removeProductFromCart(product);
  }

  onChangeQuantity(product: Product): void {
    console.log('On update click:', product);
    this.cartService.updateProduct(product);
  }

}
