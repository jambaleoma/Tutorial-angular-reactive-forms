import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const REGEX_ALPHA_NUMERIC = /^\w+$/;
const REGEX_URL = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

@Component({
  selector: 'app-regex',
  template: `
  <!-- REGEX -->
  <div class="mb-3">
    <label for="regexInput" class="form-label">Regex ALPHA NUMERIC</label>
    <input class="form-control" type="text" [formControl]="regexInput" id="regexInput">
  </div>
  <pre> valid: {{regexInput.valid}}</pre>

   <!-- REGEX URL-->
   <div class="mb-3">
    <label for="regexURLInput" class="form-label">Regex URL</label>
    <input class="form-control" type="text" [formControl]="regexURLInput" id="regexURLInput">
  </div>
  <pre> valid: {{regexURLInput.valid}}</pre>

  <!-- BUTTONS -->
  <div class="text-center p-3">
    <button type="button" class="btn btn-primary p-2" (click)="resetHandler()">Reset</button>
  </div>
  `,
  styles: [
  ]
})
export class RegexComponent {
  public regexInput = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(REGEX_ALPHA_NUMERIC)]
  });
  public regexURLInput = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(REGEX_URL)]
  });

  constructor(
    private router: Router
  ) { }

  resetHandler() {
    this.regexInput.reset();
    this.regexURLInput.reset();
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
