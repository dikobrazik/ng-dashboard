import { Component, Input, OnChanges } from '@angular/core';

export type IconNames =
  | 'contacts-active'
  | 'dashboard-active'
  | 'tasks'
  | 'search'
  | 'bell'
  | 'arrow-up'
  | 'arrow-down'
  | 'edit'
  | 'plus-round'
  | 'toggle';

@Component({
  selector: 'ud-icon',
  templateUrl: './index.component.html',
})
export class UDComponentsIcon implements OnChanges {
  @Input() iconName?: IconNames = 'tasks';
  @Input() active?: boolean;
  @Input() classes?: string = '';
  @Input() width?: string = '20px';
  @Input() height?: string = '20px';

  ngOnChanges() {}
}
