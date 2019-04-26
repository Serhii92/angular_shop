import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: ProductModel;

  @Output()
  removeCartItem: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output()
  changeQuantity: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {

  }

  onRemove(): void {
    this.removeCartItem.emit(this.cartItem);
  }

  onChangeQuantity(product: ProductModel): void {
    console.log('Change qty:', product);
    this.changeQuantity.emit(this.cartItem);
  }

}
