import { Component, inject, signal } from '@angular/core';
import { WeatherService } from '../../services/weather';
import { Weather as WeatherModel } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
   private readonly weatherService = inject(WeatherService);

  weatherData = signal<WeatherModel[]>([]);
  loading = signal(false);
  error = signal('');

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(): void {
    this.loading.set(true);
    this.error.set('');

    this.weatherService.getWeatherForecast().subscribe({
      next: (response: WeatherModel[]) => {
        this.weatherData.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load weather data.');
        this.loading.set(false);
      }
    });
  }
}
