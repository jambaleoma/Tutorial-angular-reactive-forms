import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-disable-get-raw-value',
  template: `
    <form [formGroup]="form" (submit)="save()">
      <div class="m-3">
        <input type="text"
          class="form-control mb-2" placeholder="Nome Compagnia" formControlName="name">

        <input type="text"
          class="form-control mb-2" placeholder="P. IVA" formControlName="piva">
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
export class DisableGetRawValueComponent {
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    piva: ['', Validators.required],
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
