import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../service/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})

export class AddEmployeeComponent implements OnInit {

  employee = {
   id:'',
   firstName: '',
   lastName: '',
   email: ''
  };
  submitted = false;

  constructor(private empService: EmployeeService) { }

  ngOnInit(){
    this.addEmployee();
   }

  addEmployee() {
    const data = {
      id :this.employee.id,
      firstName: this.employee.firstName,
      lastName : this.employee.lastName,
      email : this.employee.email
    }

    this.empService.addEmployee(data)
     .subscribe(
       response => {
         console.log(response);
         this.submitted = true;
       },
       error => {
         console.log(error);
       });
  }

  newEmployee() {
      this.submitted = false;
      this.employee = {
         id:'',
         firstName: '',
         lastName: '',
         email: ''
      };
    }
}
