import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroupRoutingModule } from './form-group-routing.module';
import { SetPatchComponent } from './../../typed-form/form-group/set-patch/set-patch.component';
import { StandardFormGroupComponent } from './../../typed-form/form-group/standard-form-group/standard-form-group.component';
import { FormBuilderComponent } from './../../typed-form/form-group/form-builder/form-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { DisableGetRawValueComponent } from './../../typed-form/form-group/disable-get-raw-value/disable-get-raw-value.component';
import { CustomErrorsComponent } from './../../typed-form/form-group/custom-errors/custom-errors.component';
import { RegexComponent } from './../../typed-form/form-group/regex/regex.component';
import { CustomValidatorComponent } from './../../typed-form/form-group/custom-validator/custom-validator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonTypeComponent } from './button-type/button-type.component';
import { CustomTypeComponent } from './custom-type/custom-type.component';

@NgModule({
  declarations: [
    SetPatchComponent,
    StandardFormGroupComponent,
    FormBuilderComponent,
    DisableGetRawValueComponent,
    CustomErrorsComponent,
    RegexComponent,
    CustomValidatorComponent,
    ButtonTypeComponent,
    CustomTypeComponent
  ],
  imports: [
    CommonModule,
    FormGroupRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class FormGroupModule { }
