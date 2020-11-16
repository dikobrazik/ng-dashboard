import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModules } from '../ud-ui/components/components.module';
import { ContactPagesCreate } from './ui/pages/create/index.component';

@NgModule({
  declarations: [ContactPagesCreate],
  imports: [
    CommonModule,
    CommonComponentsModules,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class ContactModule {}
