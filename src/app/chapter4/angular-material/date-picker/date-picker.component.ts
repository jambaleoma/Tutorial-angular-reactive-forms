import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  template: `
    <form [formGroup]="form" (ngSubmit)="save()">
    <mat-form-field class="example-form-field">
      <mat-label>Nome</mat-label>
      <input matInput type="text" formControlName="name">
      <button type="button" (click)="form.get('name')?.reset()" matSuffix mat-icon-button aria-label="Clear">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>

    <mat-form-field appearance="fill" class="m-2">
      <mat-label>Data di Nascita</mat-label>
      <input matInput formControlName="birthday" [matDatepicker]="picker">
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

    <div>
      <mat-checkbox formControlName="subscribe">Sottoscrivi newsletter</mat-checkbox>
    </div>

    <div>
      <button type="submit" mat-raised-button class="m-2" color="primary">Salva</button>
      <button type="button" [disabled]="form.pristine" mat-stroked-button color="primary" (click)="reset()">Reset</button>
    </div>

  </form>

  <pre>{{form.value | json}}</pre>  
  `,
  styles: [
  ]
})
export class DatePickerComponent {
  form = this.fb.nonNullable.group({
    name: '',
    subscribe: false,
    birthday: ''
  });

  constructor(private fb: FormBuilder) {}

  save() {
    console.log(this.form.value);
  }
  
  reset() {
    this.form.reset();
  }
}
