import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {

  number1: number = 12;
  number2: number = 14;

  result: number = 0;

  employeeForm!: FormGroup;
  userList: any[]= [];
  isShowAlert: boolean= false;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.initializeEmployeForm()
  }

  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList =  res;
    })
  }

  getSumOfTwoNo(num1: number, num2: number) {
    return num1 + num2 + 1;
  }

  initializeEmployeForm() {
    this.employeeForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      mobile: new FormControl(""),
      pincode: new FormControl("")
    })
  }

  showAlert() {
    if(this.isShowAlert) {
      alert("Some Message")
    } else {
      console.log("Error")
    } 
  }

  updateSum() {
    this.result = this.number1 + this.number2;
  }



}
