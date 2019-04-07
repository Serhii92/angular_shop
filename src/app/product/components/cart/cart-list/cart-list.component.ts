import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartProducts: Array<Product>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getAddedProducts();
  }

}
