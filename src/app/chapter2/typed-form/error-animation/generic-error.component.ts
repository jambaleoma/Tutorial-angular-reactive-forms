import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generic-error',
  template: `
    <small *ngIf="input.errors?.['required'] && input.dirty" id="helperrorMessage" class="form-text text-muted">Inserire un valore</small>
    <app-error-bar [error]="input.errors?.['minlength']"></app-error-bar>
    <small *ngIf="input.errors?.['minlength']" id="helperrorMessage" class="form-text text-muted"> Inserire ancora {{input.errors?.['minlength'].requiredLength - input.errors?.['minlength'].actualLength}} caratteri</small>
    <small *ngIf="input.errors?.['pattern']" id="helperrorMessage" class="form-text text-muted"> Non sono ammessi simboli</small>
  `,
  styles: [
  ]
})
export class GenericErrorComponent {
  @Input() input!: FormControl;
}
