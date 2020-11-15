import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ContactPagesCreate implements OnInit {
  days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  constructor() {}

  ngOnInit() {}
}
