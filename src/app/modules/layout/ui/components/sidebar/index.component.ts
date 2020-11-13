import { Component, OnInit } from '@angular/core';

export type Route = {
  href: string;
  icon: string;
  label: string;
};

@Component({
  selector: 'layout-sidebar',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class LayoutComponentsSidebar {
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
}
