import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';
import { StudentComponent } from '../student/student.component';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  requiredResult:any;
  constructor(private root:ActivatedRoute,
    private result: ResultsService) {
  }

  ngOnInit(): void {

  let id=this.root.snapshot.paramMap.get('id');
  this.result.getResultById(id).subscribe((row)=>this.requiredResult=row); 
  }

}
