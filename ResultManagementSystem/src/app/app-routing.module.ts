import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { HomeComponent } from './components/home/home.component';
import { AddResultComponent } from './teacher/add-result/add-result.component';
import { ShowComponent } from './components/show/show.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"student",
    component:StudentComponent
  },
  {
    path:"teacher",
    component:TeacherComponent
  },
  {
    path:"addResult",
    component:AddResultComponent
  },
  {
    path:"show/:id",
    component:ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
