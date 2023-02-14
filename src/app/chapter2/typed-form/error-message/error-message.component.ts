import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const REGEX_ALPHA_NUMERIC = /^\w+$/;

@Component({
  selector: 'app-error-message',
  template: `
  <!-- REGEX -->
  <div class="mb-3">
    <label for="errorMessageInput" class="form-label">Regex ALPHA NUMERIC</label>
    <input class="form-control" type="text" aria-describedby="helperrorMessage" [formControl]="errorMessageInput" id="errorMessageInput">
    <div *ngIf="errorMessageInput.errors as err">
    <small *ngIf="err['required'] && errorMessageInput.dirty" id="helperrorMessage" class="form-text text-muted">Inserire un valore</small>
    <small *ngIf="err['minlength']" id="helperrorMessage" class="form-text text-muted"> Inserire ancora {{err['minlength'].requiredLength - err['minlength'].actualLength}} caratteri</small>
    <small *ngIf="err['pattern']" id="helperrorMessage" class="form-text text-muted"> Non sono ammessi simboli</small>
    </div>
  </div>
  
  <pre> valid: {{errorMessageInput.valid}}</pre>

  <!-- BUTTONS -->
  <div class="text-center p-3">
    <button type="button" class="btn btn-primary p-2" (click)="resetHandler()">Reset</button>
  </div>
  `,
  styles: [
  ]
})
export class ErrorMessageComponent {
  public errorMessageInput = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(REGEX_ALPHA_NUMERIC)]
  });

  constructor(
    private router: Router
  ) { }

  resetHandler() {
    this.errorMessageInput.reset();
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
