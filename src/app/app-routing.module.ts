import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { HomeComponent } from './home/home.component';
import { PipeAsyncComponent } from './reactive-form/pipe-async/pipe-async.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WeatherAPIFormComponent } from './reactive-form/weather-apiform/weather-apiform.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,},
  { path: 'classic', component: ClassicFormComponent, data: {'form': 'classic'} },
  { path: 'reactive', component: ReactiveFormComponent, data: {'form': 'reactive'} },
  { path: 'reactive/weatherAPI', component: WeatherAPIFormComponent, data: {'form': 'reactive'} },
  { path: 'reactive/pipeAsync', component: PipeAsyncComponent, data: {'form': 'reactive'} },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
