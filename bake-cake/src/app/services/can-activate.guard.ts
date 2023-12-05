import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthServiceService } from './auth-service.service';
// import { RouteServiceService } from './route-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class canActivateGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private routerService: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.routerService.navigate(["login"])
      return false;
    }
  }
}