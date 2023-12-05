import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  securityCode:string='';
  constructor(private router:Router,private authService:AuthService){}
  match(){
  if(this.securityCode=='ram8522'){
    this.authService.logIn();
    this.router.navigate(["admin"]);
  }
  else{
    alert("Invalid credentials!!!");
    this.router.navigate(["login"]);
  }
}
}
