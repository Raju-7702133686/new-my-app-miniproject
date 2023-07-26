import { Component } from '@angular/core';
import { AllStudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {

  public students: any = [];

  public term: string = "";

  public column: any = "";
  public order: any = "";

  public limit: any = "";
  public page: any = "";


  constructor(private studentsService: AllStudentsService,private router: Router) {

    this.studentsService.getstudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        alert("Internal error");
      }
    )
  }

  getfilterstudent() {
    this.studentsService.getfilterstudents(this.term).subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        alert("internal error");
      }
    )
  }

  getsortedstudents() {
    this.studentsService.getsortedstudents(this.column, this.order).subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        alert("internal error");

      }
    )
  }

  getpaginationstudents(){
    this.studentsService.getpaginationstudents(this.limit, this.page).subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        alert("internal error");

      }
    )

  }

  deletestudents(id: any){
    this.studentsService.deletestudents(id).subscribe(
      (data: any) => {
        alert("Deleted successfully");
        location.reload();
      },
      (error: any) => {
        alert("internal error");
      }
    )
  }

  view(id:number){
    this.router.navigateByUrl('/dashboard/student-details/'+id)

  }
  edit(id:any){
    this.router.navigateByUrl('/dashboard/edit-student/'+id);
  }

}
