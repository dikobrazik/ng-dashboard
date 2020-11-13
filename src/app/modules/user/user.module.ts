import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersListPage } from './ui/pages/user-list/user-list.component';

@NgModule({
  declarations: [UsersListPage],
  imports: [RouterModule],
})
export class UserModule {}
