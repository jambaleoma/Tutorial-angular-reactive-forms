import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

const ALPHA_NUMERIC_REGEX = /^\w+$/;

@Component({
  selector: 'app-regex',
  template: `
    <form [formGroup]="form" (submit)="save()">
      <div class="m-3">
        <input type="text" [ngClass]="{'is-invalid': form.get('name')?.invalid && form.get('name')?.touched, 'is-valid': form.get('name')?.valid}"
          class="form-control mb-2" aria-describedby="helpId" placeholder="Nome Compagnia" formControlName="name">
          <small *ngIf="form.get('name')?.touched && form.get('name')?.errors?.['required']" id="helpId" class="form-text text-danger">Campo obbligatorio</small>
          <small *ngIf="form.get('name')?.touched && form.get('name')?.errors?.['minlength']" id="helpId" class="form-text text-danger">Inserire almeno 3 caratteri</small>

        <input type="text" [ngClass]="{'is-invalid': form.get('piva')?.invalid && form.get('piva')?.touched, 'is-valid': form.get('piva')?.valid}"
          class="form-control mb-2" placeholder="P. IVA" formControlName="piva">
          <small *ngIf="form.get('piva')?.touched && form.get('piva')?.errors?.['required']" id="helpId" class="form-text text-danger m-2">Campo obbligatorio</small>
          <small *ngIf="form.get('piva')?.touched && form.get('piva')?.errors?.['minlength']" id="helpId" class="form-text text-danger m-2">Inserire almeno 11 caratteri</small>
          <small *ngIf="form.get('piva')?.touched && form.get('piva')?.errors?.['maxlength']" id="helpId" class="form-text text-danger m-2">Inserire massimo 11 caratteri</small>
          <small *ngIf="form.get('piva')?.touched && form.get('piva')?.errors?.['pattern']" id="helpId" class="form-text text-danger m-2">Non sono ammessi caratteri speciali</small>
      </div>
      <div class="form-check" style="padding-left: 2.5em;">
        <input class="form-check-input" type="checkbox" id="isCompany" formControlName="isCompany">
        <label class="form-check-label" for="isCompany">
          Compagnia
        </label>
      </div>
      <div class="m-3">
        <button [disabled]="form.invalid" (click)="save()" class="btn btn-primary">Salva</button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class RegexComponent {
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    piva: ['', [Validators.required, Validators.pattern(ALPHA_NUMERIC_REGEX), Validators.minLength(11), Validators.maxLength(11)]],
    isCompany: true
  });

  constructor(
    private fb: FormBuilder
  ) {
    this.form.get('isCompany')?.valueChanges
      .subscribe(isCompanyChk => {
        if (!isCompanyChk) {
          this.form.get('piva')?.disable();
        } else {
          this.form.get('piva')?.enable();
        }
      });
  };

  save() {
    console.log(this.form.value);
    console.log(this.form.getRawValue());
  }

  disableControl() {
    this.form.get('piva')?.disable();
  }

}
