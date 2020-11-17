import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from './modules/contact/contact.module';
import { ContactPagesCreate } from './modules/contact/ui/pages/create/index.component';
import { LayoutComponent } from './modules/layout/ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/modules/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('src/app/modules/department/departement.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('src/app/modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
