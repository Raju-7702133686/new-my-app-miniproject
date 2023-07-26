import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color="blue";
  }

}
