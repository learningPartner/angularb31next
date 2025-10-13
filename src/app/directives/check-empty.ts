import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckEmpty]'
})
export class CheckEmpty implements OnInit {
  @Input() valueText: any;

  constructor(private eleRef: ElementRef) {

  }

  ngOnInit(): void {
    if (this.valueText == '' || this.valueText == null || this.valueText == undefined || this.valueText == 'string') {
      this.eleRef.nativeElement.innerText = '--';
    } else {
      this.eleRef.nativeElement.innerText = this.valueText;
    }
  }

}
