import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor = 'white';

  @HostListener('mouseenter') mouseEnter() {
    this.bgColor = '#CCFEF2';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = 'white';
  }

  constructor() { }

}
