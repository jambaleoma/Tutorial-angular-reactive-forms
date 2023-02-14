import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-chapter1',
    template: `
        <p>CAPITOLO 1</p>
        <div class="d-grid gap-3">
        <div class="p-2 bg-light border">
            <div class="mb-3">
            <form>
                <label for="" class="form-label">Sezione</label>
                <select class="form-select form-select-lg" [formControl]="formSelection">
                <option value="chapter1/classic">Approccio Classico</option>
                <option value="chapter1/reactive">Approccio Reattivo</option>
                <option value="chapter1/reactive/weatherAPI">Weather API</option>
                <option value="chapter1/reactive/pipeAsync">Pipe Asincrone</option>
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
export class Chapter1Component {
    public formSelection = new FormControl('chapter1/classic', {nonNullable: true});

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