import { Component, inject, Input } from '@angular/core';
import { Master } from '../../services/master';

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
  master= inject(Master);


  constructor() {
    this.master.$currentTimeSubject.subscribe(res=>{
      debugger;
    })
     this.master.$curretDateBehaviourSub.subscribe((res:any)=>{
      debugger;
       
    })
  }
  getValue() {
    
  }

}
