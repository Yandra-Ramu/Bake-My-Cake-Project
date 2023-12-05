import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menu} from './models/menu';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  menu_url:string="http://localhost:3000/menu";
  customer_url:string="http://localhost:3000/Customers"
  searchTextData :string='';
  getMenuDetails:Menu[]=[];
  constructor(private http:HttpClient) { }

  getAllMenus(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.menu_url);
  }

  getMenu(id:string): Observable<Menu>{
    return this.http.get<Menu>(`${this.menu_url}/${id}`);
  }

  customerDetails(body: any): Observable<any>{
    return this.http.post<any>(this.customer_url,body)
  }

  getCustomerDetails(): Observable<any>{
    return this.http.get<any>(this.customer_url);
  }
}
