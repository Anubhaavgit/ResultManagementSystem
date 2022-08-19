import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentData:any;
  resultOfStudents:any;
  constructor(private results:ResultsService,
    private router:Router) { 
    results.getResults().subscribe((data)=>{
      this.resultOfStudents=data;
    });
  }

  ngOnInit(): void {
  }
  getData(data:any){
    console.log(data);
    
    this.studentData=this.resultOfStudents.filter((row:any)=>(
      row.rollno===data.rollno));
      console.log(this.studentData);
      this.router.navigateByUrl("show/"+this.studentData[0].id);
    }
  }


