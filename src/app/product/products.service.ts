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

  getProducts(): Promise<Product[]> {
    const products = [
      new Product
        ('Laptop1', 'Laptop1 description', 1000, true, ProductCategories.Computers),
      new Product
        ('Book', 'Laptop2 description', 450, false, ProductCategories.Books),
      new Product
        ('Laptop3', 'Laptop3 description', 600, true, ProductCategories.Computers),
      new Product
        ('TV', 'Laptop description', 500, true, ProductCategories.Electronics),
      new Product
        ('TV 2', 'TV description', 500, false, ProductCategories.Electronics)
    ];

    const promise = Promise.resolve(products);
    return promise;
  }
}
