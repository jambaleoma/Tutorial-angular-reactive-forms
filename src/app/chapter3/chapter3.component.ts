import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-chapter3',
  template: `
    <p>CAPITOLO 3</p>
    <div class="d-grid gap-3">
      <div class="p-2 bg-light border">
        <div class="mb-3">
          <form>
            <label for="" class="form-label">Sezione</label>
            <select class="form-select form-select-lg" [formControl]="formSelection">
              <option value="chapter3/typedForm/multiple-form-control">Multiple Form Control</option>
              <option value="chapter3/typedForm/form-group">Form Group</option>
              <option value="chapter3/typedForm/standAlone">StandAlone</option>
            </select>
          </form>
        </div>
      </div>
    </div>

    <div class="card text-start">
      <div class="card-body">
        <h4 class="card-title"></h4>
        <router-outlet></router-outlet>
      </div>
    </div>
     `,
  styles: [
  ]
})
export class Chapter3Component {
  public formSelection = new FormControl('chapter3/typedForm/multiple-form-control', { nonNullable: true });

  constructor(
    private router: Router
  ) {
    this.formSelection.valueChanges
      .subscribe(sel => {
        this.goTo(sel);
      });
  }

  goTo(path?: string) {
    this.router.navigateByUrl(path ? path : '');
  }
}