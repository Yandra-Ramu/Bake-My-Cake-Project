import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { canActivateGuard } from './services/can-activate.guard';
import { canDeactivateGuard } from './services/can-deactivate.guard';
import { ErrorComponent } from './error/error.component';


// class AdminViewGuardService implements CanActivate{
//   constructor(private route:Router){
//   }
//   canActivate():boolean {
//     if(true){
//       return true
//     }
//     return false
//   }
  
// }

const routes: Routes = [
{path: '',component: ViewMenuComponent },
{path: 'admin',component: AdminViewComponent,canActivate:[canActivateGuard]},
{path: 'login', component: LoginComponent},
{path:'orderDetails/:id' ,component: OrderDetailsComponent,canDeactivate:[canDeactivateGuard]},
{path:'**', component: ErrorComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
