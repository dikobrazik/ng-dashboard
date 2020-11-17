import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserService } from '../../../domain/services/UserService';
import { User } from 'src/app/modules/user/domain/interfaces/User';

const headers = [
  'Name',
  'Email',
  'Company name',
  'Role',
  'Forecast',
  'Recent activity',
];

@Component({
  selector: 'users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService],
})
export class UsersListPage implements OnInit {
  headers: string[];
  users: User[] = [];
  isLoading = false;
  constructor(private userService: UserService) {
    this.headers = headers;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.load().subscribe((users) => {
      this.users = users;
      this.isLoading = false;
    });
  }
}
