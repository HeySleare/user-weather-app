import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { UserWithWeather }  from '../../models/user-with-weather.model';

@Component({
  selector:    'app-user-card',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls:   ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: UserWithWeather;
}
