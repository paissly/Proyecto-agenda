import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User; // Datos del usuario
  @Input() isSelected: boolean = false; // Indica si la tarjeta está seleccionada

  constructor() { }
}