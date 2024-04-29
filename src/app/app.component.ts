import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];
  selectedUser: User | null = null;
  searchQuery: string = ''; //Declaración de searchquery

  constructor(private readonly userService: UsersService) {
    // Obtener la lista de usuarios del servicio al inicializar el componente
    this.users = [];
    this.userService.getUsers().subscribe(response => this.users = response);
  }

  // Mostrar los detalles del usuario seleccionado
  showDetails(user: User) {
    this.selectedUser = user;
  }

  // Ocultar los detalles del usuario
  hideDetails() {
    this.selectedUser = null;
  }

  // Seleccionar un usuario
  selectUser(user: User) {
    this.selectedUser = user;
  }

  // searchResults: User[] = [];

  searchContacts() {
    if (!this.searchQuery) {
      this.userService.getUsers().subscribe(response => this.users = response);
    } else {
      this.userService.getUsers().subscribe(users => {
        this.users = users.filter(user =>
          user.name.includes(this.searchQuery) ||
          user.phoneNumber.includes(this.searchQuery) ||
          user.email.includes(this.searchQuery)
        );
      });
    }
  }
}

