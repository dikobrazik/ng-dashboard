import { Component, Input } from '@angular/core';
import { User } from '../../../domain/interfaces/User';

@Component({
  selector: '[users-table-row]',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class UserComponentsTableRow {
  @Input() user: User;
}
