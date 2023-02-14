import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-group',
  template: `
    <div class="d-grid gap-3">
      <div class="p-2 bg-light border">
        <div class="mb-3">
          <form>
          <label for="" class="form-label">Sezione</label>
          <select class="form-select form-select-lg" [formControl]="formSelection">
            <option selected value="chapter3/typedForm/form-group/standard-form-group">Standard Form Group</option>
            <option value="chapter3/typedForm/form-group/set-patch-value">SetValue & PatchValue</option>
            <option value="chapter3/typedForm/form-group/form-builder">Form Builder</option>
            <option value="chapter3/typedForm/form-group/disable-get-raw-value">Disable getRawValue</option>
            <option value="chapter3/typedForm/form-group/custom-errors">Custom Errors</option>
            <option value="chapter3/typedForm/form-group/regex">Regex</option>
            <option value="chapter3/typedForm/form-group/custom-validator">Custom Validator</option>
            <option value="chapter3/typedForm/form-group/button-type">Button Type</option>
            <option value="chapter3/typedForm/form-group/custom-type">Custom Type</option>
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
export class FormGroupComponent {

  public formSelection = new FormControl('chapter3/typedForm/form-group/standard-form-group', {nonNullable: true});

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
