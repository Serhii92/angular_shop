import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsArrayService } from '../../services/products-array.service';
import { Router } from '@angular/router';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<ProductModel>>;

  constructor(
    private router: Router,
    private productsService: ProductsArrayService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: ProductModel): void {
    console.log('On buy click:', product);
    this.cartService.addToCart(product);
  }

  onDetail(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
