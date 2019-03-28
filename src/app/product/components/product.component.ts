import { Component, OnInit } from '@angular/core';
import { ProductCategories } from '../enums/product-categories';
import { ProductsService } from '../products.service';
import { Product } from '../models/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  name: string = "Product 1";
  description: string = "Prod Description";
  price: number = 34.5;
  isAvailable = true;
  category: ProductCategories = ProductCategories.Computers;
  categories: ProductCategories;

  products: Array<Product>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    console.log('On buy click:', product);
    this.cartService.addToCart(product)

  }

}
