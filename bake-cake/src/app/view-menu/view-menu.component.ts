import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import {BakeryService} from '../services/beakery.service';
import {Menu} from '../services/models/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent{

  menuDetails:Menu[]=[];
  originalMenu:Menu[]=[];
  searchText?:string ='';
  searchData:string ='';
  constructor(private bakeryService:BakeryService,
    private router: Router) {

   }

  ngOnInit():void{
    this.bakeryService.getAllMenus().subscribe({next:data=>{
      this.menuDetails=data;
      this.originalMenu =data;
      this.bakeryService.getMenuDetails =data;

    },
    error:error=>{
      alert("Error while fetching data");
    }
  });
  }

  // onSearch(event:{ search: any; category: string }){
  //   this.searchText=event.search;
  //   if((event.search=='' ||event.search) && !event.category ){
  //     if(this.searchText !== '' && this.searchText){
  //       this.menuDetails=this.originalMenu.filter(item=> item.name?.toLowerCase()?.includes(event.search.toLowerCase()));
  //       }
  //       else{
          
  //         this.menuDetails= this.originalMenu;  
  //         console.log("####",this.menuDetails);
  //       }
  //   }
  //   else if(event.category){
  //     if(event.category === 'All'){
  //       this.menuDetails= this.originalMenu;  
  //        return
  //     }
      
  //     this.menuDetails=this.originalMenu.filter(item=> item.category?.includes(event.category));
  //     console.log("menudetails of category",this.menuDetails);
  //   }
    
  //   console.log('$$$$$$$$$$$$$$',event)
  // }
  // --------------

  // navigateToOrder(data:any){
  //   this.router.navigate(['/orderDetails',data.id])
  // }


  onSearch(event:{ search: any; category: string }){
    this.searchText=event.search;
    if((event.search=='' ||event.search) && !event.category ){
      if(this.searchText !== '' && this.searchText){
        this.menuDetails=this.menuDetails.filter(item=> item.name?.toLowerCase()?.includes(event.search.toLowerCase()));
        }
        else{
          
          this.menuDetails= this.originalMenu;  
          console.log("####",this.menuDetails);
        }
    }
    else if(event.category){
      if(event.category === 'All'){
        this.menuDetails= this.originalMenu;  
         return
      }
      
      this.menuDetails=this.originalMenu.filter(item=> item.category?.includes(event.category));
      console.log("menudetails of category",this.menuDetails);
    }
    
    console.log('$$$$$$$$$$$$$$',event)
  }
}
