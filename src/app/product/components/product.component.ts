import { Component, OnInit } from '@angular/core';
import { ProductCategories } from '../enums/product-categories';

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

  constructor() { }

  ngOnInit() {
  }

}
