import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] | undefined;
  constructor() {
    this.users = [
      {
        name: 'aida',
        status: 'Developpeuse'
      },
      {
        name: 'amina',
        status: 'Comptable'
      }
    ]
  }
}
