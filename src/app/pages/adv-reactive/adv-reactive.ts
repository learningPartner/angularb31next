import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-adv-reactive',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './adv-reactive.html',
  styleUrl: './adv-reactive.css'
})
export class AdvReactive {

  userForm2: FormGroup = new FormGroup({
    fullName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    age: new FormControl("", [Validators.required]),
    address: new FormGroup({
      city: new FormControl(""),
      state: new FormControl("")
    })
  });

  userForm: FormGroup;

  onEdit() {
  //  this.userForm = this.formBuilder.group({
  //     fullName: ["asd", [Validators.required, Validators.minLength(3)]],
  //     age: ["123", [Validators.required]],
  //     isEmployeed: [false],
  //     companyName: ['wdassa'],
  //     salary: ['11122'],
  //     accountType: ['asd'],
  //     gstNo: ['asd'],
  //     county: ['asd'],
  //     state: ['as'],
  //     address: this.formBuilder.group({
  //       city: [''],
  //       state: [''],
  //       pincode: ['']
  //     })
  //   })
  //  this.userForm.controls['companyName'].setValue('ABC');
  //   this.userForm.controls['companyName'].setValue('1200')
//this.userForm.controls['companyName'].patchValue('1200')
  // this.userForm.patchValue({
  //   companyName:'WWW',
  //   salary: 33000
  // })
   this.userForm.setValue({
    fullName: 'ABC',
    age:'324',
    companyName:'WWW',
    salary: 33000
  })
  }

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      age: ["", [Validators.required]],
      isEmployeed: [false],
      companyName: [''],
      salary: [''],
      accountType: [''],
      gstNo: [''],
      county: [''],
      state: [''],
      address: this.formBuilder.group({
        city: [''],
        state: [''],
        pincode: ['']
      })
    })
    // this.userForm.controls['companyName'].disable();
    // this.userForm.controls['salary'].disable();
    this.onEmplymentChnage(false)
    this.userForm.controls['isEmployeed'].valueChanges.subscribe((res) => {
      debugger;
      this.onEmplymentChnage(res)
      //    if (res) {
      //   this.userForm.controls['companyName'].enable();
      //   this.userForm.controls['salary'].enable();
      // } else {
      //   this.userForm.controls['companyName'].disable();
      //   this.userForm.controls['salary'].disable();
      // }
    })
    this.userForm.valueChanges.subscribe(formValue=>{
      debugger;
    });

    this.userForm.statusChanges.subscribe((res)=>{
      debugger;
    })
    this.userForm.controls['accountType'].valueChanges.subscribe((accType: string)=>{
      debugger;
      if(accType == 'business') {
        this.userForm.controls['gstNo'].setValidators([Validators.required])
        this.userForm.controls['gstNo'].updateValueAndValidity();
      } else {
        this.userForm.controls['gstNo'].removeValidators([Validators.required])
        this.userForm.controls['gstNo'].updateValueAndValidity();
      }
    })
    this.userForm.controls['county'].valueChanges.subscribe((res)=>{
      if(res === 'IN') {
        this.userForm.controls['state'].setValue('Maha')
      } else {
        this.userForm.controls['state'].setValue('')
      }
    })
  }

  onEmplymentChnage(isChecked: any) {
    console.log("onEmplymentChnage");
    debugger;
    const disbaleControList = ['companyName','salary'];
    if (isChecked) {
      disbaleControList.forEach(element => {
         this.userForm.controls[element].enable();
      });
      // this.userForm.controls['companyName'].enable();
      // this.userForm.controls['salary'].enable();
    } else {
       disbaleControList.forEach(element => {
         this.userForm.controls[element].disable();
      });
      // this.userForm.controls['companyName'].disable();
      // this.userForm.controls['salary'].disable();
    }

  }

}
