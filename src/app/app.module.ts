import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsSidebarComponent } from './components/user-details-sidebar/user-details-sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NewUserComponent } from './paginas/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    UserDetailsSidebarComponent,
    InicioComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
