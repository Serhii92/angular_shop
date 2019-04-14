import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<Product>>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: Product): void {
    console.log('On buy click:', product);
    this.cartService.addToCart(product);
  }
}
