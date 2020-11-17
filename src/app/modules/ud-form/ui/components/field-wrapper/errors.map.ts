import { ValidationErrors, Validators } from '@angular/forms';

export type CommonValidatorsKeys =
  | 'min'
  | 'max'
  | 'required'
  | 'requiredtrue'
  | 'email'
  | 'minlength'
  | 'maxlength'
  | 'pattern'
  | 'nullvalidator'
  | 'same'
  | 'minArrayLength';

export const errorsMap: Record<
  CommonValidatorsKeys,
  (error: ValidationErrors) => string
> = {
  required: (error) => `This field is required`,
  minlength: ({ requiredLength, actualLength }) =>
    `Expect ${requiredLength} but got ${actualLength}`,
  maxlength: ({ requiredLength, actualLength }) =>
    `Expect ${requiredLength} but got ${actualLength}`,
  minArrayLength: ({ requiredLength, actualLength }) =>
    `Expect ${requiredLength} items selected but got ${actualLength}`,
  min: () => '',
  max: () => '',
  requiredtrue: () => '',
  email: () => '',
  pattern: () => '',
  nullvalidator: () => '',
  same: (fieldName) => `Expect field same with ${fieldName}`,
};
