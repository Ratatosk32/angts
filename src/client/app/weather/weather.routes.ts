import { Route } from '@angular/router';
import { WeatherListComponent } from './index';

export const WeatherRoutes: Route[] = [
  {
    path: 'weather',
    component: WeatherListComponent
  }
];
