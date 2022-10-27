import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.fontSize = '0.55rem'; //Se usan las directivas para modificar directamente el html
  }
}
