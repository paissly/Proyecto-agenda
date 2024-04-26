import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];
  selectedUser: User | null = null; 

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
      {
        id: 4,
        name: 'Marcos López',
        position: 'UX/UI Designer',
        phoneNumber: '234-567-8901',
        email: 'lucasjones@gmail.com',
        instagram: '@lucasjones_',
        twitter: '@lucasjones_',
        profileImageUrl: 'assets/fotoperfil7.png',
        foto: 'assets/fotoperfil2.png',
        nivel: 'senior',
        biografia: 'Apasionado por liderar equipos y alcanzar metas desafiantes.',
        salario: 2000
      },
      {
        id: 5,
        name: 'Anna Smith',
        position: 'Designer',
        phoneNumber: '345-678-9012',
        email: 'annasmith@gmail.com',
        instagram: '@annasmith_',
        twitter: '@annasmith_',
        profileImageUrl: 'assets/fotoperfil4.png',
        foto: 'assets/fotoperfil3.png',
        nivel: 'intermedio',
        biografia: 'Amante del diseño creativo y las soluciones visuales impactantes.',
        salario: 1500
      },
      {
        id: 6,
        name: 'David Brown',
        position: 'Marketing Specialist',
        phoneNumber: '456-789-0123',
        email: 'davidbrown@gmail.com',
        instagram: '@davidbrown_',
        twitter: '@davidbrown_',
        profileImageUrl: 'assets/fotoperfil6.png',
        foto: 'assets/fotoperfil4.png',
        nivel: 'avanzado',
        biografia: 'Experto en estrategias de marketing digital y crecimiento de marca.',
        salario: 1800
      },
      {
        id: 7,
        name: 'Elena Rodriguez',
        position: 'Customer Support',
        phoneNumber: '567-890-1234',
        email: 'elenarodriguez@gmail.com',
        instagram: '@elenarodriguez_',
        twitter: '@elenarodriguez_',
        profileImageUrl: 'assets/fotoperfil5.png',
        foto: 'assets/fotoperfil5.png',
        nivel: 'intermedio',
        biografia: 'Comprometida con brindar el mejor servicio al cliente y resolver problemas.',
        salario: 1600
      },
      {
        id: 8,
        name: 'Carlos Garcia',
        position: 'Sales Manager',
        phoneNumber: '678-901-2345',
        email: 'carlosgarcia@gmail.com',
        instagram: '@carlosgarcia_',
        twitter: '@carlosgarcia_',
        profileImageUrl: 'assets/fotoperfil9.png',
        foto: 'assets/fotoperfil8.png',
        nivel: 'senior',
        biografia: 'Experimentado en liderazgo de equipos de ventas y estrategias comerciales.',
        salario: 2200
      },

      {
        id: 9,
        name: 'Laura Martinez',
        position: 'Graphic Designer',
        phoneNumber: '789-012-3456',
        email: 'lauramartinez@gmail.com',
        instagram: '@lauramartinez_',
        twitter: '@lauramartinez_',
        profileImageUrl: 'assets/fotoperfil8.png',
        foto: 'assets/fotoperfil9.png',
        nivel: 'avanzado',
        biografia: 'Apasionada por el diseño gráfico y la creatividad en todas sus formas.',
        salario: 1800
      },
      {
        id: 10,
        name: 'Daniel Fernandez',
        position: 'Software Engineer',
        phoneNumber: '890-123-4567',
        email: 'danielfernandez@gmail.com',
        instagram: '@danielfernandez_',
        twitter: '@danielfernandez_',
        profileImageUrl: 'assets/10fotoperfil.png',
        foto: 'assets/fotoperfil10.png',
        nivel: 'senior',
        biografia: 'Experto en desarrollo de software y tecnologías de vanguardia.',
        salario: 2200
      },
      {
        id: 11,
        name: 'Elena Sanchez',
        position: 'Marketing Manager',
        phoneNumber: '901-234-5678',
        email: 'elenasanchez@gmail.com',
        instagram: '@elenasanchez_',
        twitter: '@elenasanchez_',
        profileImageUrl: 'assets/fotoperfil11.png',
        foto: 'assets/fotoperfil11.png',
        nivel: 'senior',
        biografia: 'Líder en estrategias de marketing y comunicación para empresas de todo tamaño.',
        salario: 2300
      },
      {
        id: 12,
        name: 'Pedro Rodriguez',
        position: 'Frontend Developer',
        phoneNumber: '012-345-6789',
        email: 'pedrorodriguez@gmail.com',
        instagram: '@pedrorodriguez_',
        twitter: '@pedrorodriguez_',
        profileImageUrl: 'assets/fotoperfil12.png',
        foto: 'assets/fotoperfil12.png',
        nivel: 'intermedio',
        biografia: 'Apasionado por la creación de experiencias de usuario atractivas y funcionales.',
        salario: 1600
      }
    ];
  }

  // mostrar los detalles del usu
  showDetails(user: User) {
    this.selectedUser = user;
  }

  // ocultar los detalles del usu
  hideDetails() {
    this.selectedUser = null;
  }


  
  onUserSelect(user: User) {
    this.selectedUser = user;
  }

  selectUser(user: User){
    this.selectedUser = user;
  }
}
