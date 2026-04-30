import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: any[] = [
    { id: 1, name: 'Rahul', position: 'Engineer' },
    { id: 2, name: 'Priya', position: 'Manager' }
  ];

  getEmployees() {
    return this.employees;
  }

  addEmployee(emp: any) {
    this.employees.push(emp);
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}