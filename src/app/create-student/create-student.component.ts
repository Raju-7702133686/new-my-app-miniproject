import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllStudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    class: new FormControl('', [Validators.required, Validators.min(100), Validators.max(4444)]),
    fatherName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(),
    avatar: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      state: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(666666)])
    }),
    marks: new FormArray([]),
    type: new FormControl(),
    busfee: new FormControl('',[Validators.required,]),
    hostelfee: new FormControl('',[Validators.required])

  });

  get marksFormArray() {
    return this.studentForm.get('marks') as FormArray;

  }

  showmarks() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl('',[Validators.required]),
        year: new FormControl('',[Validators.required]),
        percentage: new FormControl('',[Validators.required])
      })
    )
  }

  public id: any = "";

  constructor(private studentService: AllStudentsService, private activatedroute: ActivatedRoute, private router: Router) {

    this.activatedroute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        this.studentService.getstudent(this.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
        
      }
    )

  }
  deleteclass(i:any){
    this.marksFormArray.removeAt(i);
  }

  submit() {
    console.log(this.studentForm);

    if (this.id?.length > 0) {
      this.studentService.updatestudent(this.id, this.studentForm.value).subscribe(
        (data: any) => {
          alert("student details updated successfully");
          this.router.navigateByUrl("/dashboard/all-students");
        },
        (error: any) => {
          alert("student details updation failed");
        }
      )

    }
    else {
      this.studentService.creatstudent(this.studentForm.value).subscribe(
        (data: any) => {
          alert("student details created successfully");
        },
        (error: any) => {
          alert("student details creation failed");
        }
      )
    }



  }
}
