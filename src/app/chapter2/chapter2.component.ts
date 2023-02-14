import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-chapter2',
    template: `
        <p>CAPITOLO 2</p>
        <div class="d-grid gap-3">
        <div class="p-2 bg-light border">
            <div class="mb-3">
            <form>
                <label for="" class="form-label">Sezione</label>
                <select class="form-select form-select-lg" [formControl]="formSelection">
                <option value="chapter2/typedForm/nonNullable">NonNullable</option>
                <option value="chapter2/typedForm/validators">Validators</option>
                <option value="chapter2/typedForm/regex">Regex</option>
                <option value="chapter2/typedForm/errorMessage">Error Message</option>
                <option value="chapter2/typedForm/errorAnimation">Error Animation</option>
                <option value="chapter2/typedForm/select">Select</option>
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
export class Chapter2Component {
    public formSelection = new FormControl('chapter2/typedForm/nonNullable', {nonNullable: true});

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