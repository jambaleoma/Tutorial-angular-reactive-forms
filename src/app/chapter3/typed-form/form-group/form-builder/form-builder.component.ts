import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, mergeMap, pipe } from 'rxjs';

@Component({
  selector: 'app-form-builder',
  template: `
    <form [formGroup]="form" (submit)="save()">
      <div class="m-3">
        <input type="text"
          class="form-control mb-2" placeholder="Nome Compagnia" formControlName="name">
          <pre>Dirty: {{form.get('name')?.dirty}}</pre>
          <pre>Touched: {{form.get('name')?.touched}}</pre>
          <pre>{{form.get('name')?.errors | json}}</pre>

        <input type="text"
          class="form-control mb-2" placeholder="P. IVA" formControlName="piva">

      </div>
      <div class="m-3">
        <button [disabled]="form.invalid" (click)="save()" class="btn btn-primary">Salva</button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class FormBuilderComponent {

  // FORM CONTROL IMPL
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   piva: new FormControl('', Validators.required)
  // })

  // SET FORM BUILDER BY GROUP (NonNullable)
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    piva: ['', Validators.required]
    // UPDATE ON 
  }, {updateOn: 'change'});

  constructor(
    // INIT FORM BUILDER
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) {
    // VALUE CHANGES (OBSERVABLE)
    this.form.valueChanges.
      pipe(
        debounceTime(1000),
        mergeMap(formData => this.httpClient.post('https://jsonplaceholder.typicode.com/users', formData))
      )
      .subscribe(res => {
        console.log(res);
      });

      // GET FUNCTION FOR FORMCONTROL ISTANCE
      this.form.get('name')?.valueChanges.subscribe(val => {
        console.log(val);
      });
      this.form.get('piva')?.valueChanges.subscribe(val => {
        console.log(val);
      });
  };

  save() {
    console.log(this.form.get('name'));
    console.log(this.form.get('piva'));
  }

}
