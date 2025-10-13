import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisbaleForGuest]'
})
export class DisbaleForGuest implements OnInit {


  constructor(private eleRef: ElementRef,private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    const localRole = localStorage.getItem("role");
    if(localRole == 'guest') {
      this.renderer.setAttribute(this.eleRef.nativeElement,'readonly', 'true'); 
      //this.renderer.setAttribute(this.eleRef.nativeElement,'disabled','true')
    } else {
      this.renderer.setAttribute(this.eleRef.nativeElement,'disabled','false')
    }
  }

}
