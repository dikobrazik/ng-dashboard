import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModules } from '../ud-ui/components/components.module';
import { DepartmentsService } from './domain/services/departments.service';
import { DepartmentComponentsListItem } from './ui/components/list-item/index.component';
import { DepartmentsPagesList } from './ui/pages/list/index.component';

@NgModule({
  declarations: [DepartmentsPagesList, DepartmentComponentsListItem],
  imports: [CommonModule, CommonComponentsModules],
  providers: [DepartmentsService],
})
export class DepartmentModule {}
