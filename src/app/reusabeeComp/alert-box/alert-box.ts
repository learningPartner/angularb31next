import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  imports: [],
  templateUrl: './alert-box.html',
  styleUrl: './alert-box.css'
})
export class AlertBox {

  @Input() alertType = "";
  @Input() alertMessage = "";

  localTextTile: string = "New Text";

  getValue() {
    
  }

}
