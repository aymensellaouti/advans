import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  constructor() { }
  @HostListener('keyup') changeColor() {
    const color = ' #' + Math.floor(Math.random() * 16777215).toString(16);
    this.bc = color;
    this.color = color;
  }
}
