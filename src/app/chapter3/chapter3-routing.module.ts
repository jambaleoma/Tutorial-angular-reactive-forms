import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter3Component } from './chapter3.component';
import { Page404Component } from '../page404/page404.component';
import { MultipleFormControlComponent } from './typed-form/multiple-form-control/multiple-form-control.component';
import { StandAloneComponent } from './typed-form/stand-alone/stand-alone.component';
import { TypedFormComponent } from './typed-form/typed-form.component';

const routes: Routes = [
  { path: '', component: Chapter3Component, children: [
    { path: 'typedForm/multiple-form-control', component: MultipleFormControlComponent},
    { path: 'typedForm/form-group', loadChildren: () => import ('./typed-form/form-group/form-group.module').then(m => m.FormGroupModule) },
    { path: 'typedForm/standAlone', component: StandAloneComponent},
    { path: '', redirectTo: 'typedForm/multiple-form-control', pathMatch: 'full'},
    { path: '**', component: Page404Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter3RoutingModule { }
