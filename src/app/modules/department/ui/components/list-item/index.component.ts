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

  @Output() addClick = new EventEmitter<Department>();
  @Output() editClick = new EventEmitter<Department>();

  public addEvent() {
    this.addClick.emit(this.department);
  }

  public editEvent() {
    this.editClick.emit(this.department);
  }
}
