import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  @Input() color: string ='';
  @Input() isHidden : boolean = true;

  constructor(private eleRef: ElementRef) { 
    console.log("appHighlight")
    //  if(this.isHidden) {
    //     this.eleRef.nativeElement.style.display = 'block'
    //  } else {
    //   this.eleRef.nativeElement.style.display = 'none'
    //  }
    //this.eleRef.nativeElement.style.color ="red";
  }

  //hostListner

  @HostListener('mouseover')
  onMouseOver() {
    console.log("onMouseOver")
    this.eleRef.nativeElement.style.color = this.color;
  }

  @HostListener("mouseout")
  onMouseLeft() {
     this.eleRef.nativeElement.style.color ="black";
  }
}
