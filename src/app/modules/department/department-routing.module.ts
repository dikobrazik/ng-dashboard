import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsPagesList } from './ui/pages/list/index.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsPagesList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
