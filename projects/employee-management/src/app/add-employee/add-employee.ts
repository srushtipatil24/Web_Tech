import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {

  name = '';
  position = '';

  constructor(private empService: EmployeeService,
              private router: Router) {}

  add() {
    const newEmp = {
      id: Date.now(),
      name: this.name,
      position: this.position
    };

    this.empService.addEmployee(newEmp);
    this.router.navigate(['/']);
  }
}