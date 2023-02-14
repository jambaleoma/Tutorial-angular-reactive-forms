import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mat-checkbox',
  template: `
    <form [formGroup]="form">
    <mat-form-field class="example-form-field">
      <mat-label>Nome</mat-label>
      <input matInput type="text" formControlName="name">
      <button type="button" (click)="form.get('name')?.reset()" matSuffix mat-icon-button aria-label="Clear">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>

    <div>
    <mat-checkbox formControlName="subscribe">Checked</mat-checkbox>
    </div>
  </form>

  <pre>{{form.value | json}}</pre>  
  `,
})
export class MatCheckboxComponent {
  form = this.fb.group({
    name: '',
    subscribe: true
  });

  constructor(private fb: FormBuilder) {
  }
}
