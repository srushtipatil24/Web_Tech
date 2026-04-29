import { Component } from '@angular/core';
import { EmployeeService } from '../empl';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent {

  employees: any[] = [];

  newEmployee = {
    id: 0,
    name: '',
    department: '',
    salary: 0
  };

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employees = this.empService.getEmployees();
  }

  addEmployee() {
    if (!this.newEmployee.name) return;

    this.newEmployee.id = Date.now();

    this.empService.addEmployee({ ...this.newEmployee });

    this.newEmployee = {
      id: 0,
      name: '',
      department: '',
      salary: 0
    };

    this.loadEmployees();
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id);
    this.loadEmployees();
  }
}