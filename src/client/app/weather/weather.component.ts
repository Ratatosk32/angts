import { Component, OnInit } from '@angular/core';
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";
import { ReactiveFormsModule } from '@angular/forms'

/**
 * This class represents the lazy loaded WeatherListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'weather-list',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],

  providers: [WeatherService]
})

export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherService) {}

  ngOnInit():any {
    this.weatherItems = this._weatherService.getWeatherItems();
  }
}
