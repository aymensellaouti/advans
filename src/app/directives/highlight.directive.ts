import {Directive, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bg = this.out;
  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.out;
  }
}
