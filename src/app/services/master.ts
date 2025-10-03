import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NewVendor } from '../model/vendor';
import { LoginModel } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})

export class Master {

  http = inject(HttpClient); //16

  apiVersionName: string = "v-001";
  
  //constructor(private http: HttpClient) { }


  getAllClinet() {
    debugger;
   return this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients");
  }

  onSaveClient(clientObj:any) {
    debugger;
    return this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient",clientObj);
  }

  generateFullName(fName: string, mName: string,lName: string) {
    debugger;
    const fullName =  fName + " " + mName + " " + lName;

    const full = `${fName} ${mName} ${lName}`;
    return full;
  }

  saveVendor(obj: NewVendor) {
    return this.http.post("",obj)
  }

  login(obj: LoginModel) {
     debugger;
    return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login",obj)
  }
}
