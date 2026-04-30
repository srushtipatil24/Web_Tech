import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './live-preview.html',
  styleUrl: './live-preview.css'
})
export class LivePreview {
  userText: string = '';
  maxLength: number = 100;

  get charCount(): number {
    return this.userText.length;
  }

  get isNearLimit(): boolean {
    return this.charCount >= this.maxLength * 0.8;
  }
}