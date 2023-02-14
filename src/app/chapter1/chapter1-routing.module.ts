import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { Chapter1Component } from './chapter1.component';
import { PipeAsyncComponent } from './reactive-form/pipe-async/pipe-async.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WeatherAPIFormComponent } from './reactive-form/weather-apiform/weather-apiform.component';
import { Page404Component } from '../page404/page404.component';

const routes: Routes = [
  { path: '', component: Chapter1Component, children: [
    { path: 'classic', component: ClassicFormComponent, data: {'form': 'classic'} },
    { path: 'reactive', component: ReactiveFormComponent, data: {'form': 'reactive'} },
    { path: 'reactive/weatherAPI', component: WeatherAPIFormComponent, data: {'form': 'reactive'} },
    { path: 'reactive/pipeAsync', component: PipeAsyncComponent, data: {'form': 'reactive'} },
    { path: '', redirectTo: 'classic', pathMatch: 'full' },
    { path: '**', component: Page404Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter1RoutingModule { }
