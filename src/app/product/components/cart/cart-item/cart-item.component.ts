import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: Product;

  @Output()
  removeCartItem: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {

  }

  onRemove(): void {
    this.removeCartItem.emit(this.cartItem);
  }

}
