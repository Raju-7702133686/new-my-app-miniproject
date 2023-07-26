import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { authenticatinGuard } from './authenticatin.guard';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { notifyGuard } from './notify.guard';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate: [authenticatinGuard], children:[
    {path:'home',component:HomeComponent},
    {path:'create-student',component:CreateStudentComponent,canDeactivate:[notifyGuard]},
    {path:'edit-student/:id',component:CreateStudentComponent},
    {path:'all-students',component:AllStudentsComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'product',component:ProductComponent},
    {path:'parent',component:ParentComponent},
    {path:'item',component:ItemComponent},
    {path:'nav',component:NavComponent},
    {path:'cart',component:CartComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
