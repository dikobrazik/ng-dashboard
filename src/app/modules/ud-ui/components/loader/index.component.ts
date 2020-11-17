import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class UDLoader {
  @Input() behavior: 'absolute' | 'fixed' | 'relative' = 'relative';
}
