import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ResultsService {

 url:any="http://localhost:3000/results";
  constructor(private http:HttpClient) { }


  postResult(data:any){
    return this.http.post<any>("http://localhost:3000/results",data).pipe(map((res:any)=>{
      return res;
    }))
  }
    getResults(){
      return this.http.get(this.url);
    }
    updateResult(data:any,id:number){
      return this.http.put<any>("http://localhost:3000/results/"+id,data).pipe(map((res:any)=>{
        return res;
      }))
    }
    deleteResult(id:number){
      return this.http.delete<any>("http://localhost:3000/results/"+id).pipe(map((res:any)=>{
        return res;
      }))
    }

    getResultById(id:string|null){
      return this.http.get(this.url+"/"+id);
    }
}
