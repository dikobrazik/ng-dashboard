import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Department } from '../../../domain/interfaces/Department';

@Component({
  selector: 'department-tree',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class DepartmentComponentsTree {
  open = true;
  @Input() department: Department;

  public detailsClick($event: any) {
    $event.stopPropagation();
    this.open = !this.open;
  }

  public addClick(department: Department) {
    console.log('Add department clicked: ', department);
  }
  public editClick(department: Department) {
    console.log('Edit department clicked: ', department);
  }
}
