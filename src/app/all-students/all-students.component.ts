import { Component } from '@angular/core';
import { AllStudentsService } from '../students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {

  public students:any =[];

  constructor(private studentsService: AllStudentsService){

    this.studentsService.getstudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
    )
  }

  


}
