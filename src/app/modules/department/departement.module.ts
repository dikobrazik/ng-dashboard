import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModules } from '../ud-ui/components/components.module';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentsService } from './domain/services/departments.service';
import { DepartmentComponentsListItem } from './ui/components/list-item/index.component';
import { DepartmentsPagesList } from './ui/pages/list/index.component';

@NgModule({
  declarations: [DepartmentsPagesList, DepartmentComponentsListItem],
  imports: [CommonModule, CommonComponentsModules, DepartmentRoutingModule],
  providers: [DepartmentsService],
})
export class DepartmentModule {}
