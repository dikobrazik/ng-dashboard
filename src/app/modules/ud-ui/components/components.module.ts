import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { UDComponentsIcon } from './icon/index.component';

@NgModule({
  declarations: [UDComponentsIcon],
  imports: [IconSpriteModule],
  exports: [UDComponentsIcon],
})
export class CommonComponentsModules {}
