import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn:boolean=false;

  logIn(){
    this.isLoggedIn=true;
  }

  logOut(){
    this.isLoggedIn=false;
  }
  
}
