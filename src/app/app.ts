import { Component, signal } from '@angular/core';
import { Weather } from "./pages/weather/weather";

@Component({
  selector: 'app-root',
  imports: [Weather],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weather-app');
}
