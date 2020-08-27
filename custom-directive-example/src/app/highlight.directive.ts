import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(e1: ElementRef) {
      e1.nativeElement.style.backgroundColor ='yellow';
   }

}
