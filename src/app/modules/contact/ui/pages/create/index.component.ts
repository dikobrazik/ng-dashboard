import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../../domain/services/contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ContactPagesCreate {
  isLoading = false;
  submitted = false;
  days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  contactForm: FormGroup;

  get scheduleControls() {
    return (this.contactForm.controls['schedule'] as FormArray).controls;
  }

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactService
  ) {
    this.contactForm = this.buildForm();
  }

  onReset() {
    this.contactForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.contactsService.create(this.contactForm.value).subscribe(
        () => {
          this.submitted = false;
          this.isLoading = false;
          this.contactForm.reset();
        },
        () => {
          this.isLoading = false;
        }
      );
    }
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
