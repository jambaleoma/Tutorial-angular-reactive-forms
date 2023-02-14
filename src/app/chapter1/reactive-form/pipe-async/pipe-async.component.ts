import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, mergeMap, catchError, of, Observable } from 'rxjs';
import { Meteo } from 'src/app/model/meteo.model';
import { AsyncPipeService } from 'src/app/services/async-pipe.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-pipe-async',
  template: `
    <div class="d-grid gap-3">
      <!-- SIMPLE ASYNC PIPE -->
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="pipeAsyncInput" class="form-label">Pipe Async</label>
          <input type="text" [formControl]="myPipeAsyncInput"
          class="form-control" id="pipeAsyncInput" aria-describedby="helpId" placeholder="">
        </div>
      </div>
      <!-- ASYNC PIPE FROM SERVICE -->
      <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
        <div class="mb-3">
          <label for="pipeAsyncServiceInput" class="form-label">Pipe Async From Service</label>
          <input type="text" [formControl]="myPipeAsyncServiceInput"
          class="form-control" id="pipeAsyncServiceInput" aria-describedby="helpId" placeholder="">
        </div>
      </div>
  </div>

  <!-- SIMPLE ASYNC PIPE RESPONSE -->
  <div *ngIf="(meteo$ | async) as meteo" class="d-grid gap-3">
    <div class="mb-3">
      <h3>Pipe Async: {{meteo.name}}</h3>
      <p> Temperatura: {{meteo.main.temp}}°C </p>
      <p> Umidità: {{meteo.main.humidity}}% </p>
      <img [src]="'https://api.openweathermap.org/img/w/' + meteo.weather[0].icon + '.png'" alt="icon">
    </div>
  </div>

  <!-- ASYNC PIPE FROM SERVICE RESPONSE -->
  <div *ngIf="(meteoFromService$ | async) as meteoFromService" class="d-grid gap-3">
    <div class="mb-3">
      <h3>Pipe Async From Service: {{meteoFromService.name}}</h3>
      <p> Temperatura: {{meteoFromService.main.temp}}°C </p>
      <p> Umidità: {{meteoFromService.main.humidity}}% </p>
      <img [src]="'https://api.openweathermap.org/img/w/' + meteoFromService.weather[0].icon + '.png'" alt="icon">
    </div>
  </div>
  `,
  styles: [
  ]
})
export class PipeAsyncComponent implements OnInit{
  public myPipeAsyncInput = new FormControl();
  public myPipeAsyncServiceInput = new FormControl();
  public meteo$: Observable<Meteo | null> = new Observable<Meteo | null>;
  public meteoFromService$: Observable<Meteo | null> = new Observable<Meteo | null>;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private weatherService: WeatherService,
    private asyncPipeService: AsyncPipeService
  ) {}

  ngOnInit(): void {
    this.meteo$ = this.myPipeAsyncInput.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap(
        text => this.httpClient.get<Meteo>(this.weatherService.getApi() + text + '&units=metric' + this.weatherService.getKey())
          .pipe(
            catchError(err => of(null))
          )
      ),
    );
    this.meteoFromService$ = this.asyncPipeService.getMeteo$(this.myPipeAsyncServiceInput);
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
