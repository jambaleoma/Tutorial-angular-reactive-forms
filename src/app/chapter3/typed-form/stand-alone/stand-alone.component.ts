import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
   <form [formGroup]="form" (submit)="save()">
      <div class="mb-3">
        <input type="text"
          class="form-control mb-2" placeholder="Nome Compagnia" formControlName="name">

        <input type="text"
          class="form-control mb-2" placeholder="Username" formControlName="username">

        <input type="text"
          class="form-control mb-2" placeholder="P. IVA" formControlName="piva">

        <pre> {{form.value | json}}</pre>
        <pre> dirty:  {{form.dirty}}</pre>
        <pre> touched:  {{form.touched}}</pre>
        <pre> status:  {{form.status}}</pre>

      </div>
      <div class="mb-3">
        <button type="submit" [disabled]="form.invalid" class="btn btn-primary">Salva</button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class StandAloneComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    piva: new FormControl('', Validators.required)
  })

  constructor() { }

  save() {
    console.log(this.form.value);
  }
}
