import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {
  private _deletedUserIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() {}

  get deletedUserId() { //el getter permite que otros componentes se suscriban para recibir notificaciones
    return this._deletedUserIdSubject.asObservable(); 
  }

  deleteUser(userId: number): void {
    this._deletedUserIdSubject.next(userId); //notifica a los componentes suscritos que hay que actualizar el estado
  }
}
