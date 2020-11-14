import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserService } from './domain/services/UserService';
import { UsersListPage } from './ui/pages/user-list/user-list.component';

@NgModule({
  declarations: [UsersListPage],
  imports: [CommonModule],
  providers: [UserService],
})
export class UserModule {}
