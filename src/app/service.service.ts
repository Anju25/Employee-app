import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url="http://localhost:8080/api/emp/employees";
  constructor(private httpclient :HttpClient) { }

  getEmpList(): Observable<Employee[]>
  {
       return this.httpclient.get<Employee[]>(`${this.url}`);
  }

  createEmp(emp:Employee):Observable<any>
  {
  return this.httpclient.post(`${this.url}`,emp);
  }
  
  getEmpById(id: number):Observable<Employee>
  {
    return this.httpclient.get<Employee>(`${this.url}/${id}`);
  }

  updateEmp(id:number,emp:Employee):Observable<Object>
  {
    return this.httpclient.put(`${this.url}/${id}`,emp);
  }

  deleteEmp(id:number):Observable<Object>
  {
    return this.httpclient.delete(`${this.url}/${id}`);
  }
}
