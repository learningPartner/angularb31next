import { JsonPipe } from '@angular/common';
import { Component, input, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [FormsModule, JsonPipe],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

  productName: string = "Moto Mobile";
  isPresent =  true;
  // rollno: number;

  productPrice = signal<number>(12000);

  isActive = signal(true);

  currentDate: WritableSignal<Date> = signal<Date>(new Date());

  cityList =  signal<string[]>(['Pune','Nagpur','Mumbai','Pune'])
  cityName = "";

  studentFormObj = signal<any>({name:'', city:'',state:''})

  constructor(){
    console.log(this.productName);
    console.log("************")
    console.log(this.productPrice())
  }

  chnageNAme() {
    this.studentFormObj.update(oldObj=> ({...oldObj,name: "Rahul"}))
  }
  chnageCity() {
    this.studentFormObj.update(oldObj=> ({...oldObj,city: "Panji"}))
  }
  chnageState() {
    this.studentFormObj.update(oldObj=> ({...oldObj,state: "Goa"}))
  }
  chnageWholeObj() {
    this.studentFormObj.set({name:'Ankit', mobile:'1213812763',email:'sas@gmial.com'})
  }

  chnageCoure() {
    this.productName = "Samsum Miobile";
    this.productPrice.set(15400)
  }
  addCity() {
    // const oldList =  this.cityList();
    // oldList.push(this.cityName);
    // this.cityList.set(oldList);
    const isCityExist =  this.cityList().filter(m=> m == this.cityName);
    debugger;
    if(isCityExist.length  == 0) {
       this.cityList.update(oldList => ([...oldList,this.cityName]));
    } 
    //filter || find || findIndex || some || includes 
  }


 

}
