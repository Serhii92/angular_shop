import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input()
  product: ProductModel;

  @Output()
  buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output()
  productDetails: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    this.buyProduct.emit(this.product);
  }

  onDetails(): void {
    this.productDetails.emit(this.product);
  }

}

