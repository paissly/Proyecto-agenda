import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details-sidebar',
  templateUrl: './user-details-sidebar.component.html',
  styleUrls: ['./user-details-sidebar.component.scss']
})
export class UserDetailsSidebarComponent {
  @Input() selectedUser: User | null = null;
  @Output() hideDetails: EventEmitter<void> = new EventEmitter<void>();
  @Output() showDetails: EventEmitter<User | null> = new EventEmitter<User | null>();

  onHideDetails() {
    this.hideDetails.emit();
  }
}