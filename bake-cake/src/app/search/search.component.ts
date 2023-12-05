import { Component, EventEmitter, Output } from '@angular/core';
import { BakeryService } from '../services/beakery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchquery:any ='';
   @Output() onSearchEvent=new EventEmitter<{ search: any; category: string }>();
  constructor(public bakeryService:BakeryService){

  }


  search(event?:any){
    console.log('******************',event);
    var data ={
      search :this.searchquery? this.searchquery : '',
      category :event?.value ? event?.value : ''
    }
    // if(event?.value){
    //   this.searchquery='';
    //   data ={
    //     search :'',
    //     category :event.value
    //   }
    // }
     this.onSearchEvent.emit(data);
   // this.bakeryService.searchTextData = this.searchquery;
  }
}
