import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];
  selectedUser: User | null = null; //para almacenar el usuario seleccionado

  constructor() {
    // Array de usuarios
    this.users = [
      {
        id: 1,
        name: 'Mia Doe',
        position: 'Developer',
        phoneNumber: '123-456-7890',
        email: 'miadoe@gmail.com',
        instagram: '@miadoe_',
        twitter: '@miadoe_',
        profileImageUrl: 'assets/fotoperfil.png',
        foto: 'assets/fotoperfil.png',
        nivel: 'junior',
        biografia: 'Me encanta mi trabajo, desde que empecé a estudiar..........',
        salario: 1300
      },
      {
        id: 2,
        name: 'Lucas Jones',
        position: 'Manager',
        phoneNumber: '123-456-7890',
        email: 'lucasjbrown@gmail.com',
        instagram: '@lucasjonesbrown',
        twitter: '@lucasjonesbrown',
        profileImageUrl: 'assets/fotoperfil3.png',
        foto: 'assets/fotoperfil.png',
        nivel: 'junior',
        biografia: 'Me encanta mi trabajo, desde que empecé a estudiar..........',
        salario: 1300
      },
      {
        id: 3,
        name: 'Caroline Simone',
        position: 'Marketing',
        phoneNumber: '123-456-7890',
        email: 'carolinesb@gmail.com',
        instagram: '@caroline1975',
        twitter: '@caroline1975',
        profileImageUrl: 'assets/fotoperfil2.png',
        foto: 'assets/fotoperfil.png',
        nivel: 'junior',
        biografia: 'Me encanta mi trabajo, desde que empecé a estudiar..........',
        salario: 1300
      },
    ];
  }

  // mostrar los detalles del usuario seleccionado
  showDetails(user: User) {
    this.selectedUser = user;
  }

  // ocultar los detalles del usuario
  hideDetails() {
    this.selectedUser = null;
  }


  
  onUserSelect(user: User) {
    this.selectedUser = user;
  }
}


// import { Component } from '@angular/core';
// import { User } from './models/user.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   currentUser: User;
//   user2: User;
//   user3: User;

//   constructor() {
//     // Usuarios creados
//     this.currentUser = {
//       id: 1,
//       name: 'Mia Jones',
//       position: 'Web Developer',
//       phoneNumber: '123-456-7890',
//       email: 'miajones@gmail.com',
//       instagram: '@miajones_',
//       twitter: '@miajones_',
//       profileImageUrl: 'assets/fotoperfil.png'
//     };

//     this.user2 = {
//       id: 3,
//       name: 'Alex Johnson',
//       position: 'Manager',
//       phoneNumber: '555-123-4567',
//       email: 'alex.johnson@example.com',
//       instagram: 'alex_johnson',
//       twitter: 'alex_johnson',
//       profileImageUrl: 'assets/fotoperfil3.png'
//     };

//     this.user3 = {
//       id: 4,
//       name: 'Emily Davis',
//       position: 'Marketing',
//       phoneNumber: '111-222-3333',
//       email: 'emily.davis@example.com',
//       instagram: 'emily_davis',
//       twitter: 'emily_davis',
//       profileImageUrl: 'assets/fotoperfil2.png'
//     };
//   }
// }
