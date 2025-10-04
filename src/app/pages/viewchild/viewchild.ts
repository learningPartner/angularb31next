import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertBox } from "../../reusabeeComp/alert-box/alert-box";

@Component({
  selector: 'app-viewchild',
  imports: [AlertBox],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.css'
})
export class Viewchild implements OnInit, AfterViewInit {

  @ViewChild('txtRoll') textRollInput!: ElementRef;

  @ViewChild(AlertBox) alertCompInstance! : AlertBox;


  ngOnInit(): void {
    //const roll =  this.textRollInput.nativeElement.value;
    //console.log(roll)
  }
  ngAfterViewInit(): void {
    const roll =  this.textRollInput.nativeElement.value;
    console.log(roll)
  }
  readText() {
    //const etxt =  document.getElementById("textRollNo")?.value;
    const textValue = this.textRollInput.nativeElement.value;
    debugger;
  }
  setRollText() {
    //document.getElementById("textRollNo")?.value= 222
    this.textRollInput.nativeElement.value =  2233;
  }
  ReadAlertData() {
    const text = this.alertCompInstance.localTextTile;
    debugger;
  }
}
