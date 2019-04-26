import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductsServicesModule } from '../products-services.module';
import { ProductCategories } from 'src/app/products/enums/product-categories';

const products = [
  new ProductModel
    (1, 'Laptop1', 'Laptop1 description', 1000, true, ProductCategories.Computers),
  new ProductModel
    (2, 'Book', 'Laptop2 description', 450, false, ProductCategories.Books),
  new ProductModel
    (3, 'Laptop3', 'Laptop3 description', 600, true, ProductCategories.Computers),
  new ProductModel
    (4, 'TV', 'Laptop description', 500, true, ProductCategories.Electronics),
  new ProductModel
    (5, 'TV 2', 'TV description', 500, false, ProductCategories.Electronics)
];

const productListPromise = Promise.resolve(products);

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductsArrayService {

  constructor() { }

  getProducts(): Promise<ProductModel[]> {
    return productListPromise;
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then(product => product.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getTask method'));
  }

}
