import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ContactPagesCreate implements OnInit {
  days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  contactForm = this.fb.group({
    firstName: this.fb.control('', [Validators.minLength(3)]),
    lastName: this.fb.control('', [Validators.minLength(3)]),
    role: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    repeatPassword: this.fb.control('', [Validators.required]),
    schedule: this.fb.array(this.days.map(() => this.fb.control(''))),
  });

  constructor(private fb: FormBuilder) {}

  get scheduleControls() {
    return (this.contactForm.controls['schedule'] as FormArray).controls;
  }

  ngOnInit() {}

  onReset() {
    this.contactForm.reset();
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
