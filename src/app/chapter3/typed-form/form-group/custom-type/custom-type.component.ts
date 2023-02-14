import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface MyForm {
  name: string;
  role: 'guest' | 'moderator' | 'admin';
}

@Component({
  selector: 'app-custom-type',
  template: `
    <form [formGroup]="form" (submit)="save()" >
      <input type="text"
          class="form-control mb-2" aria-describedby="helpId" placeholder="Nome Compagnia" formControlName="name">
      <select formControlName="role" class="form-control">
        <option value="guest">Seleziona un ruolo</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderatore</option>
      </select>

      <div class="m-3">
        <button [disabled]="form.invalid" class="btn btn-primary">Salva</button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class CustomTypeComponent {
  form = this.fb.nonNullable.group<MyForm>({
    name: '',
    role: 'guest',
  })

  constructor(private fb: FormBuilder) {}

  save() {
    console.log(this.form.value)
    this.form.get('role')?.setValue('moderator')
  }
}
