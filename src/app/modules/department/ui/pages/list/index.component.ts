import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
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
    this.departmentsService
      .load()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((departments) => {
        this.departments = departments;
      });
  }
}
