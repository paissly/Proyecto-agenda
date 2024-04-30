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
   
    this.users = [];
    this.userService.getUsers().subscribe(users => {
      this.users = users.sort((a, b) => a.name.localeCompare(b.name)); //para ordenar alfabéticamente los contactos
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
