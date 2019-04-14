import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontStyle]'
})
export class FontStyleDirective {

  @Input('appFontStyle') size: string;

  @HostListener('click') onMouseEnter() {
    this.updateFont(this.size || 20);
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  private updateFont(size): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', `${size}px`);
  }
}
