export interface CurrentWeather {
  temperature:    number;
  weathercode:    number;
  windspeed?:     number;
  winddirection?: number;
  time?:          string;
}

export interface WeatherResponse {
  current_weather: CurrentWeather;
  hourly: {
    time:           string[];
    temperature_2m: number[];
  };
}
