import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees: any[] = [];

  constructor(private empService: EmployeeService) {
    this.employees = this.empService.getEmployees();
  }

  delete(id: number) {
    this.empService.deleteEmployee(id);
    this.employees = this.empService.getEmployees();
  }
}