import { Component } from '@angular/core';
import { FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const REGEX_ALPHA_NUMERIC = /^\w+$/;

@Component({
  selector: 'app-error-animation',
  template: `
    <!-- REGEX -->
  <div  class="mb-3" style="width: 200px;">
    <label for="errorMessageInput" style="margin: 5px;" class="form-label">Regex ALPHA NUMERIC</label>
    <input class="form-control" style="margin: 5px; width: 100%" type="text" aria-describedby="helperrorMessage" [formControl]="errorMessageInput" id="errorMessageInput">
    <app-generic-error [input]="errorMessageInput"></app-generic-error>
  </div>

  <!-- BUTTONS -->
  <div class="text-center p-3">
    <button type="button" class="btn btn-primary p-2" (click)="resetHandler()">Reset</button>
  </div>
  `,
  styles: []
})
export class ErrorAnimationComponent {
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

  do() {
    
  }
}
