import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { WeatherListComponent } from './weather.component';
import { WeatherItemComponent } from './weather-item.component';
import { WeatherSearchComponent } from './weather-search.component';
import {TemperatureDirective} from "./temperature.directive";
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [CommonModule, MdCardModule, FormsModule],
    declarations: [WeatherListComponent, WeatherItemComponent, WeatherSearchComponent, TemperatureDirective],
    exports: [WeatherListComponent]
})
export class WeatherModule { }
