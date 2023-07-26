import { Component } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  add(){
    this.commanService.setValue();

  }
  constructor(private commanService: CommanService){}

}
