import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter1RoutingModule } from './chapter1-routing.module';
import { Chapter1Component } from './chapter1.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Chapter1Component
  ],
  imports: [
    CommonModule,
    Chapter1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Chapter1Module { }
