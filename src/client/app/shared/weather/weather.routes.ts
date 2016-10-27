import {Route} from "@angular/router";
import {WeatherComponent} from "./weather.component";

export const WeatherRoutes: Route[] = [
  {
    path: 'weather',
    component: WeatherComponent
  }
];
