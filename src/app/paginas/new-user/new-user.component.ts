import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  newUser: User = { id: 0, name: '', phoneNumber: '', email: '', foto: '', nivel: 'junior', biografia: '', salario: 0, fotoUrl: ''};
  fileToUpload: File | null = null;
  fileToUploadUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router, private userService: UsersService) {}

  addUser() {
    if (this.fileToUpload !== null) {
      this.uploadPhoto();
    }

    this.userService.addUser(this.newUser);

    this.resetForm();

    this.goBack();
  }

  uploadPhoto() {
    const photoUrl = this.fileToUploadUrl;
    this.newUser.fotoUrl = photoUrl as string;
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileToUpload = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileToUploadUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  resetForm() {
    this.newUser = { id: 0, name: '', phoneNumber: '', email: '', foto: '', nivel: 'junior', biografia: '', salario: 0, fotoUrl: ''};
    this.fileToUpload = null;
    this.fileToUploadUrl = null; 
  }

  goBack() {
    
    this.router.navigate(['/paginas/inicio']);
  }
}
