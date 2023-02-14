import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../page404/page404.component';
import { DatePickerComponent } from './angular-material/date-picker/date-picker.component';
import { InputFieldComponent } from './angular-material/input-field/input-field.component';
import { MatCheckboxComponent } from './angular-material/mat-checkbox/mat-checkbox.component';
import { Chapter4Component } from './chapter4.component';

const routes: Routes = [
  { path: '', component: Chapter4Component, children: [
    { path: 'input-field', component: InputFieldComponent},
    { path: 'mat-checkbox', component: MatCheckboxComponent},
    { path: 'date-picker', component: DatePickerComponent},
    { path: '', redirectTo: 'input-field', pathMatch: 'full' },
    { path: '**', component: Page404Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter4RoutingModule { }
