import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Weather as WeatherModel } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl =`${environment.apiBaseUrl}/Weatherforecast`;

  getWeatherForecast(): Observable<WeatherModel[]> {
    return this.http.get<WeatherModel[]>(this.apiUrl);
  }
}
