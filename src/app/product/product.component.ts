import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public products:any=[];

  constructor(private productService: ProductService){

    this.productService.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("internal error");
      }
    )
  }





}
