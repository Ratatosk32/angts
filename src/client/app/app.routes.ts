import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { WeatherRoutes } from './weather/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...WeatherRoutes
];
