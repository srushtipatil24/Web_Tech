import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './add-employee/add-employee';

export const routes: Routes = [
  { path: '', component: EmployeeList },
  { path: 'add', component: AddEmployee }
];