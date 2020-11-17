import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { uniqueId } from 'lodash';

@Component({
  selector: 'ud-checkbox',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UDComponentsCheckbox),
      multi: true,
    },
  ],
})
export class UDComponentsCheckbox implements OnInit, ControlValueAccessor {
  id: string = '';
  checked: boolean = false;
  @Input() name: string = '';
  @Input() label?: string = '';

  ngOnInit() {
    this.id = uniqueId('checkbox-');
  }

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  onValueChange($event: any) {
    this.writeValue($event.target.checked);
  }

  public writeValue(value: boolean) {
    this.checked = value;
    this.onChange(value);
    this.onTouched();
  }
  public registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
