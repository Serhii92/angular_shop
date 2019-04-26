import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: Array<ProductModel>;
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

  getProductsFromCart(): ProductModel[] {
    return this.cartService.getAddedProducts();
  }

  onRemoveItem(product: ProductModel): void {
    console.log('On remove click:', product);
    this.cartService.removeProductFromCart(product);
  }

  onChangeQuantity(product: ProductModel): void {
    console.log('On update click:', product);
    this.cartService.updateProduct(product);
  }

  onRemoveAll(): void {
    this.cartService.removeAll();
  }

}
