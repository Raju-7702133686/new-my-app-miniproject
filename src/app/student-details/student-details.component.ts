import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllStudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  public student: any = {};
  public id:any="";
  constructor(private activatedroute: ActivatedRoute, private studentService: AllStudentsService) {

    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        this.studentService.getstudent(this.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
        )
      }
    )
   }
}
