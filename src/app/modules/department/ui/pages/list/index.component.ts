import { Component, OnInit } from '@angular/core';
import { Department } from '../../../domain/interfaces/Department';
import { DepartmentsService } from '../../../domain/services/departments.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class DepartmentsPagesList implements OnInit {
  departments: Department[];
  isLoading: boolean = false;

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.departmentsService.load().subscribe((departments) => {
      this.isLoading = false;
      this.departments = departments;
    });
  }

  public onAddClick(department: Department) {
    console.log('Add department clicked: ', department);
  }
  public onEditClick(department: Department) {
    console.log('Edit department clicked: ', department);
  }
}
