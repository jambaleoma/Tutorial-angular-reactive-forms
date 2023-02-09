import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public apiBasePath = 'https://api.openweathermap.org/data/2.5/weather?q='
  protected apiKey = '95b05a3d3af2ca404aabdc0e95c4367f'

  constructor() { }

  getApi() {
    return this.apiBasePath;
  }

  getKey() {
    return '&APPID=' + this.apiKey;
  }
}
