import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter4RoutingModule } from './chapter4-routing.module';
import { Chapter4Component } from './chapter4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './angular-material/date-picker/date-picker.component';
import { InputFieldComponent } from './angular-material/input-field/input-field.component';
import { MatCheckboxComponent } from './angular-material/mat-checkbox/mat-checkbox.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    Chapter4Component,
    InputFieldComponent,
    MatCheckboxComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    Chapter4RoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ]
})
export class Chapter4Module { }
