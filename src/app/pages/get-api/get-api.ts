import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-get-api',
  imports: [FormsModule, AgGridAngular],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetAPI implements OnInit {

  deptList: any[] = [];
  designationList: any[] = [];
  empList: any[] = [];
  selectedDeptId: number = 0;
  rowSelection = {
    mode: 'singleRow'
};
  colDefs: ColDef[] = [
    { field: "fullName", headerName: "Full Emp Name" ,filter: true},
    {
      field: "phone", headerName: "Contact No", sortable: true,
      cellRenderer: (data: any) => `<b style="color:#007bff;">👤 ${data.value}</b>`
    },
    { field: "departmentName", headerName: "Dept Name" },
    { field: "designationName", headerName: "Designatipon" }
  ];
  defaultColDef: ColDef = {
    flex: 1,
  };
  paginationPageSize = 5;
  paginationPageSizeSelector: number[] | boolean = [5, 10, 15, 50];

  http = inject(HttpClient);

  constructor() {

  }

  ngOnInit(): void {
    this.getAllEmployee()
  }



  getAllDepratments() {

    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments").subscribe((result: any) => {

      this.deptList = result;
    })
  }

  getDesignationByDeptId() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=" + this.selectedDeptId).subscribe((result: any) => {
      this.designationList = result;
    })
  }
  getAllEmployee() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees").subscribe((res: any) => {
      this.empList = res;
    })
  }


}
