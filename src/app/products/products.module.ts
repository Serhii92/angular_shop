import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsServicesModule } from './products-services.module';
import { ProductListComponent, ProductComponent, ProductDetailFormComponent } from './components';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductDetailFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ProductsServicesModule
  ]
})
export class ProductsModule { }
