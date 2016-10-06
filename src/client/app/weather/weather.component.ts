import { Component } from '@angular/core';
import {WeatherItemComponent} from "./weather-item.component";

/**
 * This class represents the lazy loaded WeatherComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
})
export class WeatherComponent { }
