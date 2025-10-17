import { JsonPipe } from '@angular/common';
import { Component, computed, effect, input, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [FormsModule, JsonPipe],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal implements OnInit {

  productName: string = "Moto Mobile";
  isPresent =  true;
  // rollno: number;

  productPrice = signal<number>(12000);

  isActive = signal(true);

  currentDate: WritableSignal<Date> = signal<Date>(new Date());

  cityList =  signal<string[]>(['Pune','Nagpur','Mumbai','Pune'])
  cityName = "";

  studentFormObj = signal<any>({name:'', city:'',state:''});

  firstName = signal<string>("");
  middleName = signal<string>("");
  lastName =  signal<string>("");

  fullName = computed(()=> this.firstName() + " "+  this.middleName() +" "+  this.lastName())

  fullNameNormalSignal = signal<string>("");
  constructor(){
    console.log(this.productName);
    effect(()=>{
      debugger;
      this.fullNameNormalSignal.set(this.firstName() + " "+  this.middleName() +" "+  this.lastName())
      //console.log(this.middleName())
      console.log("effect execuited")
    })
    effect(()=>{
      debugger;
      console.log(this.lastName())
    })
    console.log("************")
    console.log(this.productPrice())
  }

  ngOnInit(): void {
   
  }
  changeFirstName() {
    this.firstName.set("Rahul")
  }

  changeFName() {
    this.firstName.set("Chetan")
  }
  changeMName() {
   this.middleName.set("P")
  }
  changeLName() {
   this.lastName.set("Jogi")
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
    
    if(isCityExist.length  == 0) {
       this.cityList.update(oldList => ([...oldList,this.cityName]));
    } 
    //filter || find || findIndex || some || includes 
  }


 

}
