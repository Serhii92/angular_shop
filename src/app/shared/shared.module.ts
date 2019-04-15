import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemStyleDirective } from './directives/cart-item-style.directive';
import { FontStyleDirective } from './directives/font-style.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [CartItemStyleDirective, FontStyleDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [CartItemStyleDirective, FontStyleDirective, OrderByPipe]
})
export class SharedModule { }
