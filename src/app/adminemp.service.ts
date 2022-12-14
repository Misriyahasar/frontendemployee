import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminempService {
  getEmployee() {
    throw new Error('Method not implemented.');
  }

  readonly APIUrl = "http://127.0.0.1:8000/accounts";
  readonly PhotoUrl = "http://127.0.0.1:8000/media";

  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }
  getEmployeeById(val:any){
    return this.http.get<any>('/employee/${id}')
  }
  updateEmployee(val:any,data:any){
    return this.http.put(this.APIUrl + '/employee/${id}',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/${id}'+val);
  }
  getLeaveList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/leave/');
  }
 
  getLeaveById(val:any){
    return this.http.get<any>('/leave/${id}')
  }
  addLeave(val:any){
    return this.http.post(this.APIUrl + '/leave/',val);
  }
  updateLeave(val:any,data:any){
    return this.http.put(this.APIUrl + '/leave/${id}',val);
  }
  deleteLeave(val:any){
    return this.http.delete(this.APIUrl + '/leave/${id}'+val);
  }
  
}
