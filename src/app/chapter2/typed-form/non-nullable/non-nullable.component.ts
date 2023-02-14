import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-nullable',
  template: `
    <!-- STANDARD INPUT -->
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" [formControl]="name"
      class="form-control" name="name" id="name" aria-describedby="helpId">
  </div>
  <pre> value: {{name.value}}</pre>
  <pre> dirty: {{name.dirty}}</pre>
  <pre> pristine: {{name.pristine}}</pre>
  <pre> touched: {{name.touched}}</pre>

  <!-- NON NULLABLE INPUT -->
  <div class="mb-3" style="margin-top: 3em;">
    <label for="name" class="form-label">Name NonNullable</label>
    <input type="text" [formControl]="nameNonNullable"
      class="form-control" name="name" id="name" aria-describedby="helpId">
  </div>
  <pre> value: {{nameNonNullable.value}}</pre>
  <pre> dirty: {{nameNonNullable.dirty}}</pre>
  <pre> pristine: {{nameNonNullable.pristine}}</pre>
  <pre> touched: {{nameNonNullable.touched}}</pre>

  <!-- BUTTONS -->
  <div class="text-center p-3">
    <button type="button" class="btn btn-primary p-2" (click)="resetHandler()">Reset</button>
    <button type="button" class="btn btn-primary p-2 m-2" (click)="changeHandler()">Change</button>
  </div>
  `,
  styles: [
  ]
})
export class NonNullableComponent {
  public name = new FormControl();
  public nameNonNullable = new FormControl('abc', { nonNullable: true });

  constructor(
    private router: Router
  ) {}

  resetHandler() {
    this.name.reset();
    this.nameNonNullable.reset();
    console.log(this.name.value);
    console.log(this.nameNonNullable.value);
  }

  changeHandler() {
    this.name.setValue('hello');
    this.nameNonNullable.setValue('hello');
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
  
}
