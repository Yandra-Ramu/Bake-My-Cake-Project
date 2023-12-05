import { Component, OnDestroy } from '@angular/core';
import { BakeryService } from '../services/beakery.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Customer} from '../services/models/customer';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent  {
  orderDetail: any;
  totalDetail: any;
  orderId:any;
  price!:number;
  totalBill!:number;
  // customerDetail:FormGroup;
  submitted = false;
  isSubmitted:boolean=false;

  customerDetail:Customer={
    // "totalPrice":this.totalBill

  };
  constructor(private bakeryService:BakeryService,private route: ActivatedRoute, private router:Router,private snackBar:MatSnackBar){
   
  }

  //   customerDetail = this.formBuilder.group({
  //   name:['', [Validators.required]],
  //   address: ['', [Validators.required]],
  //   phoneNo : ['', [Validators.required]],
  //   quantity:['',[Validators.required]],
  //   totalPrice:['',[Validators.required]]
  // })

  


  // ngOnInit():void{
  //  console.log(this.route);
  //   this.totalDetail=this.bakeryService.getMenuDetails;
  //   this.route.params.subscribe(x => {
  //     this.orderId = x['id'];
  //   });
  //   this.orderDetail = this.bakeryService.getMenuDetails.filter(item => this.orderId === item.id?.toString() );
  //   this.price=this.orderDetail.price;
  //   console.log("price",this.price);
  //   this.customerDetail.quantity=1;
  //   this.customerDetail.totalBill=this.customerDetail.quantity! * this.orderDetail.price;
  //   console.log("order-bill",this.orderDetail.totalBill);

  //   console.log('id******',this.orderDetail);
  // }


  ngOnInit(){

    this.route.paramMap.subscribe(param=>{
      let id=param.get('id')??'';
      this.bakeryService.getMenu(id).subscribe((data)=>{
        this.orderDetail=data;
        // console.log("orderdetail",this.orderDetail);
        // console.log("price",this.orderDetail.price);
        this.customerDetail.quantity;
        
        this.customerDetail.itemName=this.orderDetail.name;
        // console.log()

      });
     
    })
  }




  canDeactivate(){
    console.log("jjskj");
    if(!this.isSubmitted){
      console.log("egggg");
      this.isSubmitted=confirm("are you sure to leave the page");
      return this.isSubmitted;
    }
    return this.isSubmitted;
  }
// createCustomerForm(){
 
// }


onSubmit(form:any){
  this.isSubmitted=true
  this.customerDetail.totalPrice=this.orderDetail.price! * this.customerDetail.quantity!;
  console.log('*****',this.customerDetail)
  // const {name, address,phoneNo,totalPrice} = this.customerDetail.value
  // if(this.customerDetail.valid){
    // const reqPayload ={
    //   name,
    //   address,
    //   phoneNo,
    //   totalPrice,
    //   itemName:this.orderDetail[0].name
    // }
    this.bakeryService.customerDetails(this.customerDetail).subscribe(data => {
      console.log('Sucess')
      this.snackBar.open('Order Placed Sucessfully', 'Ok', {
        duration: 3000
      });
      this.router.navigate(['/'])
    })
  } 
}



// totalPriceCalculate(){
//   // const totalPrice = (this.orderDetail.price!) * this.quantity?.value;
//   // this.customerDetail.get('totalPrice')?.setValue(totalPrice)
// console.log('**********',this.customerDetail.quantity!);

// }

// canDeactivate(){

// }

// ngOnDestroy(){
 
// }






