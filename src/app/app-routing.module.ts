import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee.component';

const routes: Routes = [
 { path : 'Employees' , component : EmployeeListComponent},
 { path : 'AddEmployee', component : AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
