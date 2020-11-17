import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ContactPagesCreate implements OnInit {
  days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  contactForm: FormGroup;

  get scheduleControls() {
    return (this.contactForm.controls['schedule'] as FormArray).controls;
  }

  constructor(private fb: FormBuilder) {
    this.contactForm = this.buildForm();
  }

  ngOnInit() {}

  onReset() {
    this.contactForm.reset();
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return console.log(this.contactForm);
    }
    console.log(this.contactForm.valid, this.contactForm.value);
  }

  private buildForm(): FormGroup {
    return this.fb.group(
      {
        firstName: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ],
        ],
        lastName: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ],
        ],
        role: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        repeatPassword: [null, [Validators.required]],
        schedule: this.fb.array(
          this.days.map(() => [null]),
          this.scheduleValidator
        ),
        active: [null],
      },
      { validators: [this.passwordsValidator] }
    );
  }

  private scheduleValidator(
    formArray: AbstractControl
  ): ValidationErrors | null {
    if (!formArray.value.filter(Boolean).length) {
      return {
        minArrayLength: {
          requiredLength: 1,
          actualLength: formArray.value.filter(Boolean).length,
        },
      };
    }
    return null;
  }

  private passwordsValidator(formGroup: FormGroup): ValidationErrors | null {
    if (formGroup.value['password'] !== formGroup.value['repeatPassword']) {
      formGroup.get('repeatPassword')?.setErrors({
        same: 'password',
      });
    }
    return null;
  }
}
