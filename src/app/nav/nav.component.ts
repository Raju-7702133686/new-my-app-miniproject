import { Component } from '@angular/core';
import { CommanService } from '../comman.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public cartCount:number=0;

  constructor(private commanService: CommanService){

    commanService.getValue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }

}
