import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UDFormFieldWrapper } from './ui/components/field-wrapper/index.component';

@NgModule({
  declarations: [UDFormFieldWrapper],
  imports: [CommonModule],
  exports: [UDFormFieldWrapper],
  providers: [],
})
export class UDFormModule {}
