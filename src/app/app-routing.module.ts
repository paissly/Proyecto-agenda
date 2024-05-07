import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './paginas/new-user/new-user.component';
import { InicioComponent } from './paginas/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'new-user', component: NewUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
