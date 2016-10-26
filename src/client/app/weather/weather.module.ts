import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdCardModule} from "@angular2-material/card";
import {MdRadioModule} from "@angular2-material/radio";
import {MdIconModule} from "@angular2-material/icon";
import {WeatherComponent} from "./weather.component";
import {MdInputModule} from "@angular2-material/input";
import {ForecastComponent} from "./forecast.component";

@NgModule({
  imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule, MdIconModule],
  declarations: [WeatherComponent, ForecastComponent],
  exports: [WeatherComponent, ForecastComponent]
})

export class WeatherModule {
}
