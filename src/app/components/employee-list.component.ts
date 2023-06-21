import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../service/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees : any;
  currentEmployee = null;
  currentIndex = -1;
  title = '';

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
     this.getEmployees();
  }

  getEmployees() {
     this.empService.getAllEmployees()
     .subscribe(
       data => {
          this.employees = data;
          console.log(data);
       },
       error => {
        console.log(error);
       });
  }

  setActiveEmployee(employee, index) {
      this.currentEmployee = employee;
      this.currentIndex = index;
    }

}
