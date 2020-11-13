import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListPage } from './modules/user/ui/pages/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListPage },
  // { path: 'departments' },
  // { path: 'contacts/add' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
