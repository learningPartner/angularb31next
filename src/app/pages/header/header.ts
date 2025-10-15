import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  loggedData: any;
  router =  inject(Router);
  masterSrv = inject(Master);

  constructor(){
    const localData = localStorage.getItem("loginUser");
    if(localData != null) {
      this.loggedData = JSON.parse(localData);
    }
  }

  logoff() {
    localStorage.removeItem('loginUser');
    this.router.navigate(['login'])
  }

  sendTime() {
    const curretDate = new Date();
    const curretTime =  curretDate.toLocaleTimeString();
    
    this.masterSrv.$currentTimeSubject.next(curretTime);
    this.masterSrv.$curretDateBehaviourSub.next(curretDate.toString());
  }

}
