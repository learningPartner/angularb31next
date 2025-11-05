import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Master } from '../../services/master';
import { INewVendor, NewVendor } from '../../model/vendor';
import { AlertBox } from "../../reusabeeComp/alert-box/alert-box";
import { Tabs } from "../../reusabeeComp/tabs/tabs";
import { ShowMoreShowLess } from "../../reusabeeComp/show-more-show-less/show-more-show-less";
import { MyButton } from "../../reusabeeComp/my-button/my-button";
import { NullBlankPipe } from '../../pipe/null-blank-pipe';
import { Highlight } from '../../directives/highlight';
import { CheckEmpty } from '../../directives/check-empty';
import { DisbaleForGuest } from '../../directives/disbale-for-guest';
import { Observable, Subscription } from 'rxjs';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
@Component({
  selector: 'app-vendor-master',
  imports: [FormsModule, JsonPipe,IconFieldModule,InputIconModule, InputTextModule,AsyncPipe,TableModule, AlertBox, Tabs, ShowMoreShowLess, DisbaleForGuest, MyButton, NullBlankPipe, Highlight, CheckEmpty],
  templateUrl: './vendor-master.html',
  styleUrl: './vendor-master.css'
})
export class VendorMaster implements OnInit, OnDestroy {

  // newVendorObj: any = {
  //   "vendorId": 0,
  //   "vendorName": "",
  //   "contactNo": "",
  //   "emailId": ""
  // };
  title = "Warning"

  newVendorObj: NewVendor = new NewVendor();

  vendorObj!: INewVendor;

  studentObj: any = {
    name: 'ABC',

    skills: ['Angular', 'Css', 'Html']
  }
 
  http = inject(HttpClient);
  masterService = inject(Master);
  //vendorName: never = '';
  selectedTabName: string = 'Vendor List';
  curretTime: string = '';
  curretDate: string = '';

  subscriptionList: Subscription[] = [];

  isAlertCompVisiable: boolean = false;

  allClinet$: Observable<any>;
  time$ : Observable<string>;
  vendorList:any[]=[]
  isSaveApiInProgress = signal<boolean>(false);
  alertData = signal<any>({alertType:'',alertMessage:''})

  constructor() {
    this.allClinet$ =  this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
    this.time$ = this.masterService.$currentTimeSubject;
  }

  ngOnInit(): void {
    this.getAllvendors();
   // this.getAllClient()
    // this.subscriptionList.push(
    //   this.masterService.$currentTimeSubject.subscribe((time: string) => {
    //     debugger;
    //     this.curretTime = time;
    //   })
    // )
    const beh$ = this.masterService.$curretDateBehaviourSub.subscribe((res: any) => {
      debugger;
      this.curretDate = res;
    })
    this.subscriptionList.push(beh$)
    debugger;
  }

  getSelectedTabName(tabNAme: string) {

    this.selectedTabName = tabNAme;
  }

  getAllClient() {

   const cline$ =  this.masterService.getAllClinet().subscribe({
      next: (res: any) => {

      }
    })
    this.subscriptionList.push(cline$)
  }

  counter = 0;
  checkForNullorEmpty(value: any) {
    this.counter++;
    console.log("checkForNullorEmpty")
    console.log(this.counter)
    if (value == '' || value == null || value == undefined) {
      return "--";
    } else {
      return value;
    }
  }

  chnageName(form: NgForm) {

    form.form.controls['vendorName'].setValue("demo")
  }

  getAllvendors() {
     this.isSaveApiInProgress.set(true);
   const bus$= this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe((Res: any) => {
      this.vendorList = Res;
       this.isSaveApiInProgress.set(false);
      //this.vendorList = Res.filter((m:any) => m.vendorName !== 'string' && m.contactNo != "string" && m.emailId !="string");
    })
    this.subscriptionList.push(bus$)
  }

  onSaveVendor() {

    // this.masterService.saveVendor(this.newVendorObj).subscribe((res:any)=>{

    // });
    this.isSaveApiInProgress.set(true);
    this.http.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor", this.newVendorObj).subscribe((res: any) => {

      // alert("Vendor Created Success");
      this.vendorList.push(res)
      this.isSaveApiInProgress.set(false)
      this.alertData.set({alertType:'Success',alertMessage:'Vendor Created Success'})
     // this.getAllvendors();
     setTimeout(() => { 
       this.alertData.set({alertType:'',alertMessage:''})
     }, 3000);
    },error=>{
        this.alertData.set({alertType:'Error',alertMessage:'API Failed'})
    })
  }

  onEdit(data: any) {
    this.newVendorObj = data;
    this.selectedTabName = 'New Vendor Form'
  }

  onUpdateVendor() {
    this.http.put("https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=" + this.newVendorObj.vendorId, this.newVendorObj).subscribe((res: any) => {
      alert("Vendor Updated");
     this.getAllvendors();
    })
  }

  onDeleteVendor(id: number) {
    const isDelete = confirm("Are you sure want to Delete");

    if (isDelete) {
      this.http.delete("https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=" + id).subscribe((res: any) => {
        alert("Vendor Deleted");
        this.getAllvendors();
      })
    }
  }

  onResteForm() {
    this.newVendorObj = {
      "vendorId": 0,
      "vendorName": "",
      "contactNo": "",
      "emailId": ""
    };
  }

  ngOnDestroy(): void {
    debugger;
    this.subscriptionList.forEach(sub => {
      sub.unsubscribe()
    })
  }
}
