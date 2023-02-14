import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  template: `
  <div class="d-grid gap-3">
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="input" class="form-label">Input</label>
          <input type="text" [formControl]="myInput"
          class="form-control" id="input" aria-describedby="helpId" placeholder="">
        </div>
      </div>
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="debounceInput" class="form-label">Debounce Input</label>
          <input type="text" [formControl]="myInputDebounce"
            class="form-control" id="debounceInput" aria-describedby="helpId" placeholder="">
        </div>
      </div>
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="debounceDistinctInput" class="form-label">Debounce + Distinct Input</label>
          <input type="text" [formControl]="myInputDebounceDistinct"
            class="form-control" id="debounceDistinctInput" aria-describedby="helpId" placeholder="">
        </div>
      </div>
  </div>
  `,
  styles: [
  ]
})
export class ReactiveFormComponent {
  public myInput = new FormControl()
  public myInputDebounce = new FormControl()
  public myInputDebounceDistinct = new FormControl()

  constructor(
    private router: Router
  ) {
    // INPUT
    this.myInput.valueChanges
    .pipe(
      map(text => text.toUpperCase())
    )
    .subscribe(text => {
      console.log(text);
    });
    // INPUT DEBOUNCE
    this.myInputDebounce.valueChanges
    .pipe(
      map(text => text.toUpperCase()),
      debounceTime(1000)
    )
    .subscribe(text => {
      console.log(text);
    });
    // INPUT DEBOUNCE DISTINCT UNTIL CHANGED
    this.myInputDebounceDistinct.valueChanges
    .pipe(
      map(text => text.toUpperCase()),
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(text => {
      console.log(text);
    });
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
