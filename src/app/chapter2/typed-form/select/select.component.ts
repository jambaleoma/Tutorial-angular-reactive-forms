import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

type Role = 'admin' | 'mod' | '';

@Component({
  selector: 'app-select',
  template: `
   <!-- SELECT -->
  <div class="mb-3">
    <label for="selectInput" class="form-label">Select</label>
    <select class="form-select form-select-lg" style="width: 300px;" [formControl]="role" name="" id="selectInput">
      <option value="">Seleziona un Ruolo</option>
      <option value="admin">Admin</option>
      <option value="mod">Moderator</option>
    </select>
  </div>
  `,
  styles: [
  ]
})
export class SelectComponent {
  public role = new FormControl<Role>('');

  constructor(
    private router: Router
  ) {
    // this.role.setValue('admin');
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
