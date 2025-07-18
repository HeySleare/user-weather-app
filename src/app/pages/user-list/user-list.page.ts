import { Component, OnInit }        from '@angular/core';
import { CommonModule }             from '@angular/common';
import { UserWithWeather }          from '../../models/user-with-weather.model';
import { UserService }              from '../../services/user.service';
import { WeatherService }           from '../../services/weather.service';
import { UserCardComponent }        from '../../components/user-card/user-card.component';
import { weatherCodeMap }           from '../../models/weather-icons';

@Component({
  selector:    'app-user-list',
  standalone:  true,
  imports:     [CommonModule, UserCardComponent],
  templateUrl: './user-list.page.html',
  styleUrls:   ['./user-list.page.scss']
})
export class UserListPage implements OnInit {
  users: UserWithWeather[] = [];

  constructor(
    private userSvc: UserService,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe(res => {
      this.users = res.results as UserWithWeather[];
      this.users.forEach((u, i) => {
        const { latitude, longitude } = u.location.coordinates;
        this.weatherSvc.getWeather(latitude, longitude)
          .subscribe(forecast => {
            u.weather = forecast.current_weather;
            u.weatherIcon = weatherCodeMap[u.weather.weathercode] || '❔';
            const today = new Date().toISOString().slice(0, 10);
            const temps: number[] = [];
            forecast.hourly.time.forEach((t, idx) => {
              if (t.startsWith(today)) {
                temps.push(forecast.hourly.temperature_2m[idx]);
              }
            });
            if (temps.length) {
              u.dailyMin = Math.min(...temps);
              u.dailyMax = Math.max(...temps);
            }
          });
      });
    });
  }
}
