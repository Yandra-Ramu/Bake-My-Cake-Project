// import { CanActivateFn } from '@angular/router';

// export const canDeactivateGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Injectable({
  providedIn: 'root',
})
export class canDeactivateGuard implements CanDeactivate<OrderDetailsComponent> {
  canDeactivate(
    component: OrderDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return component.canDeactivate();
    }
}