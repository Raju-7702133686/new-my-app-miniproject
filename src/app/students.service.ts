import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStudentsService {

  constructor(private httpClient: HttpClient) { }

  getstudents():Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students");
  }

  creatstudent(data:any):Observable<any>{
    return this.httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data);
  }

  getfilterstudents(term:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter="+term);
  }

  getsortedstudents(column:any,order:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy="+column+"&order="+order);
  }

  getpaginationstudents(limit:any,page:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?limit="+limit+"&page="+page);
  }

  deletestudents(id:any):Observable<any>{
    return this.httpClient.delete("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id);
  }

  getstudent(id:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id);
  }

  updatestudent(id:any,data:any):Observable<any>{
    return this.httpClient.put("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id,data);
  }
}
