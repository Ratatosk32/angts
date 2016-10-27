import {Routes} from "@angular/router";
import {HomeRoutes} from "./home/index";
import {MainRoutes} from "./main/main.routes";
import {WeatherRoutes} from "./shared/weather/weather.routes";
import {YouTubeRoutes} from "./shared/youtube/youtube.routes";
import {GeoRoutes} from "./shared/geo/geo.routes";

export const routes: Routes = [
  ...HomeRoutes,
  ...MainRoutes,
  ...WeatherRoutes,
  ...YouTubeRoutes,
  ...GeoRoutes
];
