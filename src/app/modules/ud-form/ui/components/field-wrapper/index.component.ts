import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { CommonValidatorsKeys, errorsMap } from './errors.map';

@Component({
  selector: 'form-field-wrapper',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class UDFormFieldWrapper {
  @Input() label: string = '';
  @Input() labelFor: string = '';
  @Input() showErrors: boolean = true;
  @Input() controller: AbstractControl | null;

  get control(): FormControl {
    return this.controller as FormControl;
  }

  get shouldShowErrors() {
    const { invalid, touched } = this.control;
    return invalid && (touched || this.showErrors);
  }

  get errors() {
    const errors = this.control.errors;
    if (errors) {
      return Object.entries(errors).map(([key, error]) =>
        errorsMap[key as CommonValidatorsKeys](error)
      );
    }
    return [];
  }
}
