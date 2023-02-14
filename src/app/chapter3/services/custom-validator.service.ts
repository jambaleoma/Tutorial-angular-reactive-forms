import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

const ALPHA_NUMERIC_REGEX = /^\w+$/;

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  alphaNumericValidators(c: FormControl) {
    return (c.value && !c.value.match(ALPHA_NUMERIC_REGEX)) ? { alphaNumeric: true } : null;
  }
}
