import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, DatePickerModule,SelectModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit{

  http= inject(HttpClient);
  deptList: any[] = [];
  designationList: any[] = [];

  empObj: any ={
  "employeeId": 0,
  "fullName": "",
  "email": "",
  "phone": "",
  "gender": "",
  "dateOfJoining": "",
  "departmentId": 0,
  "designationId": 0,
  "employeeType": "",
  "salary": 0,
  "profileLogo":""
}
minDate: Date | undefined;
master = inject(Master);
constructor() {
     
        this.minDate = new Date();
        
}
ngOnInit(): void {
  this.getAllDept();
   this.master.$currentTimeSubject.subscribe((time: string)=>{
      debugger;
      //this.curretTime =  time;
    })
    this.master.$curretDateBehaviourSub.subscribe((res:any)=>{
      debugger;
     // this.curretDate =  res;
    })
}

onPhoneChnage() {
  console.log("Focus Out")
  if(this.empObj.phone.length ==10) {

  } 
}

  getAllDept() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments").subscribe({
      next:(result: any)=>{
        this.deptList = result;
      }
    })
  }
  onDeptChange() {
     this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId="+ this.empObj.departmentId).subscribe({
      next:(result: any)=>{
        this.designationList = result;
      }
    })
  }

  onFileChange(event:any) {
    
    const file =  event.target.files[0];
    const formData = new FormData();
    formData.append("file",file);

    this.http.post("https://storeapi.gerasim.in/api/Customer/Upload",formData).subscribe((Res:any)=>{
      
      this.empObj.profileLogo = Res;
    })
  }


}
