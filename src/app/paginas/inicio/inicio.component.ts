import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model'; 
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  users: User[] = []; // Inicializar la variable users
  selectedUser: User | null = null;
  searchQuery: string = '';

  constructor(private readonly userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  showDetails(user: User) {
    this.selectedUser = user;
  }

  hideDetails() {
    this.selectedUser = null;
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  searchContacts() {
    if (!this.searchQuery) {
      this.userService.getUsers().subscribe(users => {
        this.users = users.sort((a, b) => a.name.localeCompare(b.name));
      });
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
