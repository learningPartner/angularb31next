import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/client.model';
import { Master } from '../../services/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj: LoginModel = new LoginModel();
  masterSrv =  inject(Master);
  router = inject(Router)

  onLogin() {
    debugger;
    this.masterSrv.login(this.loginObj).subscribe({
      next:(res:any)=>{
         debugger;
         localStorage.setItem('loginUser',JSON.stringify(res));
         this.router.navigateByUrl("client");
      },
      error:(error:any)=>{
         debugger;
         alert(error.error)
      }
    })
  }
}


