import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, mergeMap, of, switchMap } from 'rxjs';
import { Meteo } from 'src/app/model/meteo.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-apiform',
  template: `
   <div class="d-grid gap-3">
      <!-- SIMPLE API CALL -->
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="weatherAPI" class="form-label">Weather API</label>
          <input type="text" [formControl]="myWeatherAPIInput"
          class="form-control" id="weatherAPI" aria-describedby="helpId" placeholder="">
        </div>
      </div>
      <!-- API CALL ERROR CATCH -->      
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="weatherAPIErrorCatch" class="form-label">Weather API Error catch</label>
          <input type="text" [formControl]="myWeatherAPIErrorCatchInput"
          class="form-control" id="weatherAPIErrorCatch" aria-describedby="helpId" placeholder="">
        </div>
      </div>
  </div>

  <div *ngIf="meteo" class="d-grid gap-3">
    <div class="mb-3">
      <p> Temperatura: {{meteo.main.temp}}°C </p>
      <p> Umidità: {{meteo.main.humidity}}% </p>
      <img [src]="'https://api.openweathermap.org/img/w/' + meteo.weather[0].icon + '.png'" alt="icon">
    </div>
  </div>
  `,
  styles: [
  ]
})
export class WeatherAPIFormComponent {
  public myWeatherAPIInput = new FormControl()
  public myWeatherAPIErrorCatchInput = new FormControl()
  public meteo: Meteo | null = null;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private weatherService: WeatherService
  ) {
    // SIMPLE INPUT
    this.myWeatherAPIInput.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap(text => this.httpClient.get<Meteo>(this.weatherService.getApi() + text + '&units=metric' + this.weatherService.getKey())),
      )
      .subscribe(res => console.log(res));
    
      // INPUT WITH ERROR CATCH
    this.myWeatherAPIErrorCatchInput.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap(
          text => this.httpClient.get<Meteo>(this.weatherService.getApi() + text + '&units=metric' + this.weatherService.getKey())
            .pipe(
              catchError(err => of(null))
            )
        ),
      )
      .subscribe({
        next: (res) => this.meteo = res,
        error: (err) => console.log(err)
      });
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}

