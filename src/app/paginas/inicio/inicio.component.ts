import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { UserDeleteService } from 'src/app/services/user-delete.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  users: User[] = [];
  selectedUser: User | null = null;
  searchQuery: string = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private readonly userService: UsersService,
    private readonly userDeleteService: UserDeleteService
  ) {}

  ngOnInit(): void {
    this.loadUsers();

    this.subscription = this.userDeleteService.deletedUserId.subscribe(deletedUserId => {
      if (deletedUserId) {
        this.removeUser(deletedUserId);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadUsers(): void {
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
      this.loadUsers();
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

  removeUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    if (this.selectedUser && this.selectedUser.id === userId) {
      this.selectedUser = null;
    }
  }

  handleUserDeleted(userId: number): void {
    this.removeUser(userId);
  }
}
