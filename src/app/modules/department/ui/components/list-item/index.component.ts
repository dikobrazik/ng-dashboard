import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../../domain/interfaces/Department';

@Component({
  selector: 'department-list-item',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class DepartmentComponentsListItem {
  @Input() department: Department;
  @Input() opened: boolean;
  @Input() isControlsVisible: boolean;

  @Output() onAddClick = new EventEmitter<Department>();
  @Output() onEditClick = new EventEmitter<Department>();

  public onAdd() {
    this.onAddClick.emit(this.department);
  }

  public onEdit() {
    this.onEditClick.emit(this.department);
  }
}
