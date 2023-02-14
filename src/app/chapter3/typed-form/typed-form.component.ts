import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typed-form',
  template: `
    <div class="d-grid gap-3">
    <div class="p-2 bg-light border" style="display: flex;justify-content: space-evenly;">
      <button type="button" class="btn btn-primary btn-square-md" (click)="goTo('typedForm/multiple-form-control')">Multiple Form Control</button>
      <button type="button" class="btn btn-primary btn-square-md" (click)="goTo('typedForm/form-group')">Form Group</button>
      <button type="button" class="btn btn-primary btn-square-md" (click)="goTo('typedForm/standAlone')">StandAlone</button>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class TypedFormComponent {
  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
