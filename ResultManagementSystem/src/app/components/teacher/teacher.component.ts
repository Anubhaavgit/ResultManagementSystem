import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';
import { AddResultComponent } from 'src/app/teacher/add-result/add-result.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  resultOfStudents:any;
  constructor(private results:ResultsService) { 
    results.getResults().subscribe((data)=>{
      this.resultOfStudents=data;
    });
  }

  @ViewChild(AddResultComponent, {static : true}) child !: AddResultComponent;

  ngOnInit(): void {
  }
  delete(data:any) {
    console.log(data);
    results:ResultsService;
    this.results.deleteResult(data.id)
    .subscribe(() =>(this.resultOfStudents = this.resultOfStudents.filter((res:any) => res.id !== data.id)));
  }

}
