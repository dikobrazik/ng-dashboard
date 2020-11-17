import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UDFormModule } from '../ud-form/ud-form.module';
import { CommonComponentsModules } from '../ud-ui/components/components.module';
import { ContactService } from './domain/services/contact.service';
import { ContactPagesCreate } from './ui/pages/create/index.component';

@NgModule({
  declarations: [ContactPagesCreate],
  imports: [
    UDFormModule,
    CommonModule,
    CommonComponentsModules,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ContactService],
  exports: [],
})
export class ContactModule {}
