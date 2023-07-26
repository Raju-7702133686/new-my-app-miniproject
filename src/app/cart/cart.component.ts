import { Component } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public cartCount:number=0;

  constructor(private commanService: CommanService){

    commanService.getValue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
  }


