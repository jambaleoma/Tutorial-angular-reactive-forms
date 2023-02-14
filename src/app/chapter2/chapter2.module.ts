import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter2RoutingModule } from './chapter2-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Chapter2Component } from './chapter2.component';
import { ErrorAnimationComponent } from './typed-form/error-animation/error-animation.component';
import { ErrorBarComponent } from './typed-form/error-animation/error-bar.component';
import { GenericErrorComponent } from './typed-form/error-animation/generic-error.component';
import { GetPercPipe } from './typed-form/error-animation/get-perc.pipe';
import { ErrorMessageComponent } from './typed-form/error-message/error-message.component';
import { NonNullableComponent } from './typed-form/non-nullable/non-nullable.component';
import { RegexComponent } from './typed-form/regex/regex.component';
import { SelectComponent } from './typed-form/select/select.component';
import { ValidatorsComponent } from './typed-form/validators/validators.component';


@NgModule({
  declarations: [
    Chapter2Component,
    ValidatorsComponent,
    NonNullableComponent,
    RegexComponent,
    ErrorMessageComponent,
    ErrorAnimationComponent,
    ErrorBarComponent,
    GenericErrorComponent,
    GetPercPipe,
    SelectComponent
  ],
  imports: [
    CommonModule,
    Chapter2RoutingModule,
    ReactiveFormsModule
  ]
})
export class Chapter2Module { }
