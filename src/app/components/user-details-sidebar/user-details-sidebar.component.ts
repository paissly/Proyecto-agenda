import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserDeleteService } from 'src/app/services/user-delete.service';

@Component({
  selector: 'app-user-details-sidebar',
  templateUrl: './user-details-sidebar.component.html',
  styleUrls: ['./user-details-sidebar.component.scss']
})
export class UserDetailsSidebarComponent {
  @Input() selectedUser: User | null = null;
  @Output() hideDetails: EventEmitter<void> = new EventEmitter<void>();
  @Output() userDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private userDeleteService: UserDeleteService) {}

  onHideDetails() {
    this.hideDetails.emit();
  }

  deleteUser(): void {
    if (this.selectedUser) {
      this.userDeleteService.deleteUser(this.selectedUser.id); //llama al servicio
      this.userDeleted.emit(this.selectedUser.id);
    }
  }
}
