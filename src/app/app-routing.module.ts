import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './modules/contact/contact.module';
import { ContactPagesCreate } from './modules/contact/ui/pages/create/index.component';
import { DepartmentModule } from './modules/department/departement.module';
import { DepartmentsPagesList } from './modules/department/ui/pages/list/index.component';
import { LayoutComponent } from './modules/layout/ui/layout/layout.component';
import { UsersListPage } from './modules/user/ui/pages/user-list/user-list.component';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'users', component: UsersListPage },
      { path: 'departments', component: DepartmentsPagesList },
      {
        path: 'contacts',
        children: [{ path: 'add', component: ContactPagesCreate }],
      },
    ],
  },
  { path: '**', redirectTo: '/users' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    DepartmentModule,
    ContactModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
