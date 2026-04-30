import { Component } from '@angular/core';
import { StudentCard } from './student-card/student-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'student-profile';
}