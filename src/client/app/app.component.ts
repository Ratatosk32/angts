import {Component} from "@angular/core";
import {Config} from "./shared/index";
import "./operators";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, WeatherComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
