import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  template: `
  <form [formGroup]="form">
    <mat-form-field class="example-form-field">
      <mat-label>Nome</mat-label>
      <input matInput type="text" formControlName="name">
      <button type="button" (click)="form.get('name')?.reset()" matSuffix mat-icon-button aria-label="Clear">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  </form>

  <pre>{{form.value | json}}</pre>  

  `,
})
export class InputFieldComponent {
  
  form = this.fb.group({
    name: ''
  });

  constructor(private fb: FormBuilder) {
  }
}
