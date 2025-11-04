import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-family',
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './user-family.html',
  styleUrl: './user-family.css',
})
export class UserFamily {

  emmployeForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    city: new FormControl(""),
    mobile: new FormControl(""),
    familyDetails: new FormArray([])
  })
  
  constructor() {
    //this.addFamily()
  }

  addFamily( ) {
    const familyForm = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(""),
      relation: new FormControl("")
    });
    //const falik =this.emmployeForm.controls['familyDetails'] as FormArray;
    this.getFamilyListControl.push(familyForm)
  }

  deleteFamliy(index:number) {
    debugger;
    this.getFamilyListControl.removeAt(index)
  }

  get getFamilyListControl() {
    return this.emmployeForm.controls['familyDetails'] as FormArray;
  }
  

  onSaveEMp() {
    const formValue = this.emmployeForm.value;
    debugger;
  }





}
