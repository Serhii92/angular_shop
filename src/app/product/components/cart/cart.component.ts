import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: Array<Product>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getAddedProducts();
  }

}
