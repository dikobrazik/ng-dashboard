import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/ui/layout/layout.component';
import { UsersListPage } from './modules/user/ui/pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'users', component: UsersListPage },
      { path: 'departments', component: UsersListPage },
      {
        path: 'contacts',
        children: [{ path: 'add', component: UsersListPage }],
      },
    ],
  },
  { path: '**', redirectTo: '/users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
