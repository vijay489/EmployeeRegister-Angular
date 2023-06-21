import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'employee/list';
const addUrl = 'employee/register';

@Injectable({
  providedIn : 'root'
  })
export class EmployeeService {
  constructor(private http: HttpClient) { }

  public getAllEmployees() {
   return this.http.get(baseUrl);
  }

  public addEmployee(data) {
    return this.http.post(addUrl,data);
  }

 }

