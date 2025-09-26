import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [ReactiveFormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client implements OnInit {


  newClientForm: FormGroup = new FormGroup({
    clientId: new FormControl(0),
    clientName: new FormControl("",[Validators.required, Validators.minLength(5)]),
    businessName: new FormControl(""),
    contactPerson: new FormControl(""),
    contactNo: new FormControl(""),
    altContactNo: new FormControl(""),
    email: new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    createdDate: new FormControl(new Date()),
    logo: new FormControl("") 
  });
  
  clientList: any[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllClinets();
  }

  onEdit(data: any) {
    this.newClientForm = new FormGroup({
      clientId: new FormControl(data.clientId),
      clientName: new FormControl(data.clientName),
      businessName: new FormControl(data.businessName),
      contactPerson: new FormControl(data.contactPerson),
      contactNo: new FormControl(data.contactNo),
      altContactNo: new FormControl(data.altContactNo),
      email: new FormControl(data.email),
      createdDate: new FormControl(new Date()),
      logo: new FormControl(data.logo)
    });
  }

  getAllClinets() {
    this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients").subscribe({
      next: (response: any) => {
        this.clientList = response.data;
      },
      error: (error) => {

      }
    })
  }

  onSaveClientOld() {
    debugger;
    const formValue = this.newClientForm.value;
    this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClientsaa", {}).subscribe((res: any) => {
      debugger;
      if (res.result == true) {
        alert("Client Created Success")
      } else {
        alert(res.message)
      }
    }, error => {
      debugger;
    })
  }
  onSaveClient() {
    const formValue = this.newClientForm.value;
    this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient", formValue).subscribe({
      next: (result: any) => {
        if (result.result == true) {
          alert("Client Created Success")
        } else {
          alert(result.message)
        }
      },
      error: (error) => {
        alert("API Errpor")
      }
    })
  }



}
