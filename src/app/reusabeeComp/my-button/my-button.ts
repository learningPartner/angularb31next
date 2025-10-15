import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {

  @Input() btnTitle: string = '';
  @Input() btnClass: string = '';
  @Input() btnType: string ='';

  @Output() onBtnClick = new EventEmitter<void>();

  onClick() {
    
    this.onBtnClick.emit();
  }

}
