import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OpenMeteoResponse {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
  hourly: {
    time: string[];  
    temperature_2m: number[];
  };
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private base = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeather(lat: string, lon: string): Observable<OpenMeteoResponse> {
    const params = new HttpParams()
      .set('latitude', lat)
      .set('longitude', lon)
      .set('current_weather', 'true')
      .set('hourly', 'temperature_2m')
      .set('timezone', 'auto');
    return this.http.get<OpenMeteoResponse>(this.base, { params });
  }
}
