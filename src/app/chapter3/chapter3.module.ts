import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter3RoutingModule } from './chapter3-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Page404Component } from '../page404/page404.component';
import { FormGroupComponent } from './typed-form/form-group/form-group.component';
import { MultipleFormControlComponent } from './typed-form/multiple-form-control/multiple-form-control.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { Chapter3Component } from './chapter3.component';


@NgModule({
  declarations: [
    Chapter3Component,
    MultipleFormControlComponent,
    TypedFormComponent,
    FormGroupComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    Chapter3RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class Chapter3Module { }
