import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemStyleDirective } from './directives/cart-item-style.directive';
import { FontStyleDirective } from './directives/font-style.directive';

@NgModule({
  declarations: [CartItemStyleDirective, FontStyleDirective],
  imports: [
    CommonModule
  ],
  exports: [CartItemStyleDirective, FontStyleDirective]
})
export class SharedModule { }
