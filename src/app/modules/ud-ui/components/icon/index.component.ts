import { Component, Input, OnChanges } from '@angular/core';

export type IconNames = 'contacts-active' | 'dashboard-active' | 'tasks';

@Component({
  selector: 'ud-icon',
  templateUrl: './index.component.html',
})
export class UDComponentsIcon implements OnChanges {
  @Input() iconName?: IconNames = 'tasks';
  @Input() active?: boolean;
  @Input() classes?: string = '';

  ngOnChanges() {}
}
