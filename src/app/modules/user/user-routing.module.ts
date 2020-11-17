import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListPage } from './ui/pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
