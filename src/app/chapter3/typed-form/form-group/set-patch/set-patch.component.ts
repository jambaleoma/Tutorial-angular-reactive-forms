import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-patch',
  template: `
    <form [formGroup]="form" (submit)="save()">
      <div class="mb-3">
        <input type="text"
          class="form-control mb-2" placeholder="Nome Compagnia" formControlName="name">

        <input type="text"
          class="form-control mb-2" placeholder="P. IVA" formControlName="piva">

        <pre> {{form.value | json}}</pre>

      </div>
      <div class="m-3">
        <button [disabled]="form.invalid" (click)="save()" class="btn btn-primary">Salva</button>
      </div>
    </form>

    <button type="button" (click)="populate(false)" class="btn btn-primary">Popola Interamente la Form</button>
    <button type="button" (click)="populate(true)" class="btn btn-primary m-2">Popola Parzialmente la Form</button>
  `,
  styles: [
  ]
})
export class SetPatchComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    piva: new FormControl('', Validators.required)
  })

  save() {
    console.log(this.form.value);
  }

  reset() {
    this.form.reset();
  }

  populate(partialPopulate: boolean) {
    if (partialPopulate) {
      this.form.patchValue({
        name: 'ciao'
      })
    } else {
      this.form.setValue({
        name: 'ciao',
        piva: '12OJWJ2'
      });
    }
  }

}
