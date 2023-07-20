import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AllStudentsService } from '../students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fatherName: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    marks: new FormArray([]),
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee: new FormControl()

  });

  get marksFormArray() {
    return this.studentForm.get('marks') as FormArray;

  }

  showmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl()
      })
    )
  }

  constructor(private studentService: AllStudentsService){}

  submit(){
    console.log(this.studentForm);

    this.studentService.creatstudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("student data created successfully");
      },
      (error:any)=>{
        alert("student data creation failed");
      }
    )
  }

}
