import { Component } from '@angular/core';
import {WeatherItemComponent} from "./weather-item.component";

/**
 * This class represents the lazy loaded WeatherListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'weather-list',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
})
export class WeatherListComponent { }
