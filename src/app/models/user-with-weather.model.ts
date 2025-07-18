import { User }            from './user.model';
import { WeatherResponse } from './weather.model';

export interface UserWithWeather extends User {
  weather?:     WeatherResponse['current_weather'];
  dailyMin?:    number;
  dailyMax?:    number;
  weatherIcon?: string;
}
