import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { UDComponentsCheckbox } from './checkbox/index.component';
import { UDComponentsIcon } from './icon/index.component';
import { UDLoader } from './loader/index.component';

@NgModule({
  declarations: [UDComponentsIcon, UDComponentsCheckbox, UDLoader],
  imports: [IconSpriteModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UDComponentsIcon, UDComponentsCheckbox, UDLoader],
})
export class CommonComponentsModules {}
