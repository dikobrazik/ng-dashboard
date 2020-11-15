import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { UDComponentsCheckbox } from './checkbox/index.component';
import { UDComponentsIcon } from './icon/index.component';

@NgModule({
  declarations: [UDComponentsIcon, UDComponentsCheckbox],
  imports: [IconSpriteModule, CommonModule],
  exports: [UDComponentsIcon, UDComponentsCheckbox],
})
export class CommonComponentsModules {}
