import { Component } from '@angular/core';
import {WeatherListComponent} from "./weather-list.component";
import {WeatherSearchComponent} from "./weather-search.component";
import {WeatherService} from "./weather.service";

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [WeatherService]
})
export class AboutComponent { }
