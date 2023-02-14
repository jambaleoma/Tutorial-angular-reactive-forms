import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validators',
  template: `
  <!-- VALIDATORS -->
  <div class="mb-3">
    <label for="name" class="form-label">Name Validator (required + minLength 3)</label>
    <input class="form-control" type="text" [formControl]="nameValidator" id="name">
  </div>
  <pre> valid: {{nameValidator.valid}}</pre>

  <!-- VALIDATORS + NONNULLABLE -->
  <div class="mb-3">
    <label for="name" class="form-label">Name Validator + NonNullable</label>
    <input class="form-control" type="text" [formControl]="nameValidatorNonNullable" id="name">
  </div>
  <pre> valid: {{nameValidatorNonNullable.valid}}</pre>

  <!-- NUMBER -->
  <div class="mb-3">
    <label for="name" class="form-label">Number</label>
    <input class="form-control" type="number" [formControl]="total" id="name">
  </div>
  <pre> valid: {{total.valid}}</pre>

  <!-- BUTTONS -->
  <div class="text-center p-3">
    <button type="button" class="btn btn-primary p-2" (click)="resetHandler()">Reset</button>
  </div>
  `,
  styles: [
  ]
})
export class ValidatorsComponent {
  public nameValidator = new FormControl('',
    [Validators.required, Validators.minLength(3)]
  );
  public nameValidatorNonNullable = new FormControl('12', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)]
  });
  public total = new FormControl(0, {
    nonNullable: true,
    validators: [Validators.min(0), Validators.max(3)]
  });

  constructor(
    private router: Router
  ) { }

  resetHandler() {
    this.nameValidator.reset();
    this.nameValidatorNonNullable.reset();
    this.total.reset();
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
