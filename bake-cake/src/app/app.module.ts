import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorComponent } from './error/error.component';
// import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ViewMenuComponent,
    HeaderComponent,
    DashboardComponent,
    SearchComponent,
    FooterComponent,
    OrderDetailsComponent,
    AdminViewComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
