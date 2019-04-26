import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { FormsModule } from '@angular/forms';
import { CartServiceModule } from './cart-service.module';
import { CartListComponent, CartItemComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent, CartListComponent, CartItemComponent],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedModule,
    CartServiceModule,
    CartRoutingModule
  ]
})
export class CartModule { }
