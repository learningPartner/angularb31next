import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  loggedData: any;
  router =  inject(Router);

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

}
