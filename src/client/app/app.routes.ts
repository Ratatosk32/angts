import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { WeatherRoutes } from './weather/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...WeatherRoutes
];
