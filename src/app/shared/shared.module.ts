import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemStyleDirective } from './cart-item-style.directive';

@NgModule({
  declarations: [CartItemStyleDirective],
  imports: [
    CommonModule
  ],
  exports: [CartItemStyleDirective]
})
export class SharedModule { }
