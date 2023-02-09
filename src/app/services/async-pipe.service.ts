import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, mergeMap, catchError, of } from 'rxjs';
import { Meteo } from '../model/meteo.model';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class AsyncPipeService {

  constructor(
    private httpClient: HttpClient,
    private weatherService: WeatherService
  ) { }

  getMeteo$(input: FormControl) {
    return input.valueChanges
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
  }
}
