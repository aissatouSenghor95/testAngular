import { Component, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() user: User | undefined;
  constructor() {
    console.log(this.user?.name);
  }

}
