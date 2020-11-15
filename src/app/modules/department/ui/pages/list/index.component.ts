import { Component } from '@angular/core';
import { Department } from '../../../domain/interfaces/Department';

@Component({
  selector: 'app-departments-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class DepartmentsPagesList {
  public onAddClick(department: Department) {
    console.log('Add department clicked: ', department);
  }
  public onEditClick(department: Department) {
    console.log('Edit department clicked: ', department);
  }
}
