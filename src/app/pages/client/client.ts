import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Master } from '../../services/master';
import { AlertBox } from "../../reusabeeComp/alert-box/alert-box";
import { Tabs } from "../../reusabeeComp/tabs/tabs";
import { ShowMoreShowLess } from "../../reusabeeComp/show-more-show-less/show-more-show-less";

@Component({
  selector: 'app-client',
  imports: [ReactiveFormsModule, AlertBox, Tabs, ShowMoreShowLess],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client implements OnInit {

  tabListData = ['Product Basic','Discounts','Delivery Codes','Images','Reviews']

 
  completeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae sce lerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.'

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

  masterService = inject(Master);

  ngOnInit(): void {
    this.getAllClinetData();
    debugger;
    const fullName =  this.masterService.generateFullName('Chetan', 'p', 'Jogi');

    const apiVerison =  this.masterService.apiVersionName;
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

  getAllClinetData() {
    debugger;
    this.masterService.getAllClinet().subscribe({
      next:(result:any)=>{
debugger;
      },
      error:(error)=>{

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
  // onSaveClient() {
  //   const formValue = this.newClientForm.value;
  //   this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient", formValue).subscribe({
  //     next: (result: any) => {
  //       if (result.result == true) {
  //         alert("Client Created Success")
  //       } else {
  //         alert(result.message)
  //       }
  //     },
  //     error: (error) => {
  //       alert("API Errpor")
  //     }
  //   })
  // }

    onSaveClient() {
      debugger;
    const formValue = this.newClientForm.value;
    this.masterService.onSaveClient(formValue).subscribe({
      next: (result: any) => {
        debugger;
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

   onFileChange(event:any) {
    debugger;
    const file =  event.target.files[0];
    const formData = new FormData();
    formData.append("file",file);

    this.http.post("https://storeapi.gerasim.in/api/Customer/Upload",formData).subscribe((Res:any)=>{
      debugger;
      this.newClientForm.controls['logo'].setValue(Res)
    })
  }



}
