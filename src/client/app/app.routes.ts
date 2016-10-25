import {Routes} from "@angular/router";
import {HomeRoutes} from "./home/index";
import {MainRoutes} from "./main/main.routes";

export const routes: Routes = [
  ...HomeRoutes,
  ...MainRoutes
];
