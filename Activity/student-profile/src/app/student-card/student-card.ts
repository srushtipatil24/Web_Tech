import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {
  studentName: string = 'Srushti patil';
  course: string = 'B.Tech Computer Science';
  rollNumber: string = '23UAM107';
  email: string = 'abc@college.edu';
  profileImage: string = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul';
  isActive: boolean = true;
}