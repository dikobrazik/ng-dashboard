import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModules } from '../ud-ui/components/components.module';
import { DepartmentComponentsListItem } from './ui/components/list-item/index.component';
import { DepartmentsPagesList } from './ui/pages/list/index.component';

@NgModule({
  declarations: [DepartmentsPagesList, DepartmentComponentsListItem],
  imports: [CommonModule, CommonComponentsModules],
})
export class DepartmentModule {}
