import { Component, OnInit } from '@angular/core';
import { IconNames } from 'src/app/modules/ud-ui/components/icon/index.component';
import { SidebarService } from '../../../domain/services/sidebar.service';

export type Route = {
  href: string;
  icon: IconNames;
  label: string;
};

@Component({
  selector: 'layout-sidebar',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class LayoutComponentsSidebar {
  toggled = true;
  routes: Route[] = [
    {
      href: '/users',
      label: 'Users',
      icon: 'contacts-active',
    },
    {
      href: '/departments',
      label: 'Departments',
      icon: 'dashboard-active',
    },
    {
      href: '/contacts/add',
      label: 'Add contact',
      icon: 'tasks',
    },
  ];

  constructor(private sidebarService: SidebarService) {
    sidebarService.sub.subscribe((toggled) => (this.toggled = toggled));
  }

  public toggle() {
    this.sidebarService.close();
  }
}
