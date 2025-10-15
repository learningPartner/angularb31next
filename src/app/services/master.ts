import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NewVendor } from '../model/vendor';
import { LoginModel } from '../model/client.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Master {

  http = inject(HttpClient); //16

  apiVersionName: string = "v-001";

  $currentTimeSubject: Subject<string> = new Subject<string>();

  $curretDateBehaviourSub: BehaviorSubject<string> = new BehaviorSubject<string>("");

  
  //constructor(private http: HttpClient) { }


  getAllClinet() {
    
   return this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients");
  }

  onSaveClient(clientObj:any) {
    
    return this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient",clientObj);
  }

  generateFullName(fName: string, mName: string,lName: string) {
    
    const fullName =  fName + " " + mName + " " + lName;

    const full = `${fName} ${mName} ${lName}`;
    return full;
  }

  saveVendor(obj: NewVendor) {
    return this.http.post("",obj)
  }

  login(obj: LoginModel) {
     
       const tokenData = localStorage.getItem("token")
      const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenData}`  
    });

    return this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",obj,{headers})
  }
}
