import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../../../page404/page404.component';
import { CustomErrorsComponent } from './../../typed-form/form-group/custom-errors/custom-errors.component';
import { CustomValidatorComponent } from './../../typed-form/form-group/custom-validator/custom-validator.component';
import { DisableGetRawValueComponent } from './../../typed-form/form-group/disable-get-raw-value/disable-get-raw-value.component';
import { FormBuilderComponent } from './../../typed-form/form-group/form-builder/form-builder.component';
import { RegexComponent } from './../../typed-form/form-group/regex/regex.component';
import { SetPatchComponent } from './../../typed-form/form-group/set-patch/set-patch.component';
import { StandardFormGroupComponent } from './../../typed-form/form-group/standard-form-group/standard-form-group.component';
import { ButtonTypeComponent } from './button-type/button-type.component';
import { CustomTypeComponent } from './custom-type/custom-type.component';
import { FormGroupComponent } from './form-group.component';

const routes: Routes = [
  { path: '', component: FormGroupComponent, children: [
    { path: 'standard-form-group', component: StandardFormGroupComponent },
    { path: 'set-patch-value', component: SetPatchComponent },
    { path: 'form-builder', component: FormBuilderComponent },
    { path: 'disable-get-raw-value', component: DisableGetRawValueComponent },
    { path: 'custom-errors', component: CustomErrorsComponent },
    { path: 'regex', component: RegexComponent },
    { path: 'custom-validator', component: CustomValidatorComponent },
    { path: 'button-type', component: ButtonTypeComponent },
    { path: 'custom-type', component: CustomTypeComponent },
    { path: '', redirectTo: 'standard-form-group', pathMatch: 'full' },
    { path: '**', component: Page404Component },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGroupRoutingModule { }
