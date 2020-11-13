import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { LayoutComponentsNavigationItem } from './ui/components/navigation-item/index.component';
import { LayoutComponentsSidebar } from './ui/components/sidebar/index.component';
import { LayoutComponent } from './ui/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutComponentsSidebar,
    LayoutComponentsNavigationItem,
  ],
  exports: [LayoutComponent],
  imports: [CommonModule, IconSpriteModule, RouterModule],
})
export class LayoutModule {}
