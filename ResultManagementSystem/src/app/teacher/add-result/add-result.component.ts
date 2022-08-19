import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { teacherModel } from 'src/app/components/teacher/teacher.model';
import {ResultsService} from 'src/app/services/results.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {

  formValue !: FormGroup;

  teacherModelObj:teacherModel=new teacherModel();

  studentsRecord !:any;
  constructor(private formbuilder:FormBuilder,
     public result:ResultsService, private router:Router) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      rollno:[''],
      name:[''],
      dob:[''],
      score:['']
    });
    this.getAllRecords();
  }
postNewStudentDetails(){
  this.teacherModelObj.rollno=this.formValue.value.rollno;
  this.teacherModelObj.name=this.formValue.value.name;
  this.teacherModelObj.dob=this.formValue.value.dob;
  this.teacherModelObj.score=this.formValue.value.score;

  this.result.postResult(this.teacherModelObj)
  .subscribe(res=>{

    console.log(res)
    alert("New Student data added successfully")
    this.formValue.reset();
    this.router.navigateByUrl("teacher");
    this.getAllRecords();
  },
  err=>{
    alert("Something went wrong")
    console.log(err);
    console.log(this.formValue.value.name);
    
  })
}
getAllRecords(){
  this.result.getResults()
  .subscribe(res=>{
    this.studentsRecord=res;
  })
}

deleteRecord(row:any){
 alert("hello");
  this.result.deleteResult(row.id)
  .subscribe(res=>{
    alert("Record Deleted");
  })
}
}
