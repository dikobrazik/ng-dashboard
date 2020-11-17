import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModules } from '../ud-ui/components/components.module';
import { UserService } from './domain/services/UserService';
import { UserComponentsTableRow } from './ui/components/table-row/index.component';
import { UsersListPage } from './ui/pages/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UsersListPage, UserComponentsTableRow],
  imports: [CommonModule, UserRoutingModule, CommonComponentsModules],
  providers: [UserService],
})
export class UserModule {}
