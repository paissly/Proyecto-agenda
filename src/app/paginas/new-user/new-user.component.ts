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
    // Upload photo if selected
    if (this.fileToUpload !== null) {
      this.uploadPhoto();
    }

    // Add new user
    this.userService.addUser(this.newUser);

    // Reset form
    this.resetForm();

    // Navigate back to contact list page
    this.goBack();
  }

  uploadPhoto() {
    // Simulating photo upload
    // Replace this with actual photo upload logic
    const photoUrl = this.fileToUploadUrl; // Assigning the uploaded photo URL
    this.newUser.fotoUrl = photoUrl as string; // Assigning the photo URL to newUser.fotoUrl
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
