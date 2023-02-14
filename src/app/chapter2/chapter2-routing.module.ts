import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../page404/page404.component';
import { Chapter2Component } from './chapter2.component';
import { ErrorAnimationComponent } from './typed-form/error-animation/error-animation.component';
import { ErrorMessageComponent } from './typed-form/error-message/error-message.component';
import { NonNullableComponent } from './typed-form/non-nullable/non-nullable.component';
import { RegexComponent } from './typed-form/regex/regex.component';
import { SelectComponent } from './typed-form/select/select.component';
import { ValidatorsComponent } from './typed-form/validators/validators.component';

const routes: Routes = [
  { path: '', component: Chapter2Component, children: [
    { path: 'typedForm/nonNullable', component: NonNullableComponent, data: {'form': 'typedFormNonNullable'} },
    { path: 'typedForm/validators', component: ValidatorsComponent, data: {'form': 'typedFormValidators'} },
    { path: 'typedForm/regex', component: RegexComponent },
    { path: 'typedForm/errorMessage', component: ErrorMessageComponent },
    { path: 'typedForm/errorAnimation', component: ErrorAnimationComponent },
    { path: 'typedForm/select', component: SelectComponent },
    { path: '', redirectTo: 'typedForm/nonNullable', pathMatch: 'full' },
    { path: '**', component: Page404Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter2RoutingModule { }
