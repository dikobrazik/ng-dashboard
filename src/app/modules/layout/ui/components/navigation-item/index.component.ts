import { Component, Input } from '@angular/core';
import { Route } from '../sidebar/index.component';

@Component({
  selector: 'layout-navigation-item',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class LayoutComponentsNavigationItem {
  @Input() route: Route = {
    icon: 'tasks',
    label: '',
    href: '',
  };
}
