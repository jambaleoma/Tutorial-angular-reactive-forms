import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard-form-group',
  template: `
   <form [formGroup]="form" (submit)="save()">
      <div class="mb-3">
        <input type="text"
          class="form-control mb-2" placeholder="Nome Compagnia" formControlName="name">

        <input type="text"
          class="form-control mb-2" placeholder="Username" formControlName="username">

        <input type="text"
          class="form-control mb-2" placeholder="P. IVA" formControlName="piva">

        <input type="text"
          class="form-control mb-2" placeholder="Tel." formControlName="telephone">

        <pre> {{form.value | json}}</pre>
        <pre> dirty:  {{form.dirty}}</pre>
        <pre> touched:  {{form.touched}}</pre>
        <pre> status:  {{form.status}}</pre>

      </div>
      <div class="mb-3">
        <button [disabled]="form.invalid" (click)="save()" class="btn btn-primary">Salva</button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class StandardFormGroupComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    piva: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required)
  })

  save() {
    console.log(this.form.value);
    
    // if (this.name.valid && this.piva.valid) {
    //   console.log('http', this.name.value, this.piva.value);
    // }
  }

}
