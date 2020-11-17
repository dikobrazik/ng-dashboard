import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPagesCreate } from './ui/pages/create/index.component';

const routes: Routes = [
  {
    path: 'add',
    component: ContactPagesCreate,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
