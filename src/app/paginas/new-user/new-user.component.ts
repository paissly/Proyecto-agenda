import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  newUser: User = { id: 0, name: '', phoneNumber: '', email: '', foto: '', nivel: '', biografia: '', salario: 0};

  constructor(private userService: UsersService) {}

  addUser() {
    this.userService.addUser(this.newUser);
    this.newUser = { id: 0, name: '', phoneNumber: '', email: '', foto: '', nivel: '', biografia: '', salario: 0};
  }

  submitForm() {
    
  }
}
