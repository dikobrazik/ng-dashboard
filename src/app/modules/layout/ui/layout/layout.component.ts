import { Component } from '@angular/core';
import { SidebarService } from '../../domain/services/sidebar.service';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private toggleService: SidebarService) {}

  public onSearchClick() {
    this.toggleService.open();
  }
}
