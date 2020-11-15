import { Component, Input, OnInit } from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'ud-checkbox',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class UDComponentsCheckbox implements OnInit {
  id: string = '';
  @Input() name: string = '';
  @Input() label?: string = '';

  ngOnInit() {
    this.id = uniqueId('checkbox-');
  }
}
