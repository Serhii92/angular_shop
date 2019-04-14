import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCartItemStyle]'
})
export class CartItemStyleDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouse enter');
    this.backgroundColor = '#DDF3FD';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouse leave');
    this.backgroundColor = '#fff';
  }

  constructor() { }

}
