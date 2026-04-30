import { Component } from '@angular/core';
import { LivePreview } from './live-preview/live-preview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivePreview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'live-input-preview';
}