import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiple-form-control',
  template: `
    <div class="mb-3">

    <input type="text"
      class="form-control mb-2" placeholder="Nome Compagnia" [formControl]="name">

    <input type="text"
      class="form-control" placeholder="P. IVA" [formControl]="piva">

    </div>
    <div class="mb-3">
    <button type="button" [disabled]="name.invalid || piva.invalid" (click)="save()" class="btn btn-primary">Salva</button>
    </div>
  `,
  styles: [
  ]
})
export class MultipleFormControlComponent {
  name = new FormControl('', Validators.required);
  piva = new FormControl('', Validators.required);

  constructor(
    private router: Router
  ) { }

  save() {
    if (this.name.valid && this.piva.valid) {
      console.log('http', this.name.value, this.piva.value);
    }
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
