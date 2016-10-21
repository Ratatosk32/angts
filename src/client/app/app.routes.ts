import {Routes} from "@angular/router";
import {WeatherRoutes} from "./weather/index";
import {HomeRoutes} from "./home/index";

export const routes: Routes = [
  ...HomeRoutes,
  ...WeatherRoutes
];
