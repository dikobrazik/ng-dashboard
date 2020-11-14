import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { UDComponentsCheckbox } from './checkbox/index.component';
import { UDComponentsIcon } from './icon/index.component';

@NgModule({
  declarations: [UDComponentsIcon, UDComponentsCheckbox],
  imports: [IconSpriteModule],
  exports: [UDComponentsIcon, UDComponentsCheckbox],
})
export class CommonComponentsModules {}
