import { Component } from '@angular/core';
import { UserList } from './user-list/user-list';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'api-integration';
}