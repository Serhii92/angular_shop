import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductCategories } from './enums/product-categories';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProduct(): Product {
    return new Product
      ('Laptop', 'Laptop description', 1000, true, ProductCategories.Computers);
  }

  getProducts(): Array<Product> {
    return [
      new Product
        ('Laptop1', 'Laptop1 description', 1000, true, ProductCategories.Computers),
      new Product
        ('Book', 'Laptop2 description', 450, true, ProductCategories.Books),
      new Product
        ('Laptop3', 'Laptop3 description', 600, true, ProductCategories.Computers),
      new Product
        ('TV', 'Laptop description', 500, true, ProductCategories.Electronics)
    ]
  }
}
