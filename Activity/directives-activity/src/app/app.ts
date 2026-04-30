import { Component } from '@angular/core';
import { DirectivesDemo } from './directives-demo/directives-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DirectivesDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'directives-activity';
}