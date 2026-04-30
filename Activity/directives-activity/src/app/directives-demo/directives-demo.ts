import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css'
})
export class DirectivesDemo {

  // --- ngIf data ---
  isLoggedIn: boolean = false;

  // --- ngFor data ---
  students: string[] = ['Rahul', 'Priya', 'Amit', 'Sneha', 'Ravi'];

  // --- ngSwitch data ---
  selectedDay: string = 'Monday';
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // --- ngClass data ---
  alertType: string = 'success';

  // --- ngStyle data ---
  fontSize: number = 16;
  textColor: string = '#1a73e8';

  // Methods
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }

  addStudent() {
    this.students.push('New Student ' + (this.students.length + 1));
  }
}