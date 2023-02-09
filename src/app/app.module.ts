import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAPIFormComponent } from './reactive-form/weather-apiform/weather-apiform.component';
import { PipeAsyncComponent } from './reactive-form/pipe-async/pipe-async.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicFormComponent,
    ReactiveFormComponent,
    HomeComponent,
    WeatherAPIFormComponent,
    PipeAsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
