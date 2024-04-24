import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User = {} as User; 
  @Input() userName: string = ''; // Nombre del usuario
  @Input() userPosition: string = ''; // Puesto del usuario

  constructor() { }
}