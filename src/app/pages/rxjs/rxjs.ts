import { Component } from '@angular/core';
import { BehaviorSubject, delay, from, interval, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css'
})
export class Rxjs {

  $firstName = new Observable((data)=>{
    data.next("Chetan")
  });

  cityList$ =  of(['Mumbai','Thane','Nagpur','Pune']);

  stateList$ = from(['Mah','Punjab','Goa']);

  studentObj$ =  of({name:'Rahul',city:'pune'});

  employeeObj$ =  from([{name:'Rahul',city:'pune'}])

  timer$ = interval(4000);

  currentTime =  new Subject<string>();

  currentDate$ =  new BehaviorSubject<string>("14-10-25");




  coursername: string = "";
  

  constructor() {
    
    this.coursername = "Java";
    //write
    // this.timer$.subscribe((res)=>{
    //   
    // })
    // setInterval(() => {
    //   console.log("Interval")
    // }, 2000);
    this.$firstName.subscribe(result=>{
      //
    })
    this.cityList$.subscribe((cityData)=>{
      //
    })
    this.stateList$.subscribe((state)=>{
      //
    })
    this.studentObj$.subscribe((Stude)=>{
      //
    });

   
    this.currentTime.subscribe((res)=>{
      
    })
    this.currentDate$.subscribe((Res)=>{
      
    })

    const newOb =  this.currentDate$.asObservable();
    newOb.subscribe((result)=>{
      
    })
    this.currentDate$.next("asdasd")

    
    this.currentTime.next("7 Am"); 

   
  }


  chnageTime() {
    this.coursername = "Dot net";
    //wrote
    this.currentTime.next("10 Am")
  }
  

  




}
