import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BakeryService } from '../services/beakery.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit,AfterViewInit {
  customerData: any;
  displayedColumns: string[] = ['id', 'customerName', 'phoneNo', 'itemName','totalPrice','quantity'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private bakeryService:BakeryService){

  }
  

  ngOnInit():void{
    this.bakeryService.getCustomerDetails().subscribe({next:data=>{
      this.customerData=data;
      this.dataSource = this.customerData;
      this.dataSource.paginator = this.paginator;
      console.log('@#$%^&*()',this.customerData);
      console.log('datasource',this.dataSource);
    },
    error:error=>{
      alert("Error while fetching data");
    }
  });
  }

}
