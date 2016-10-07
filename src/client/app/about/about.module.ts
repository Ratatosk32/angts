import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { AboutComponent } from './about.component';
import { TemperatureDirective } from "./temperature.directive";
import { WeatherItemComponent } from "./weather-item.component";
import { WeatherListComponent } from "./weather-list.component";
import { WeatherSearchComponent } from "./weather-search.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule, MdCardModule, FormsModule, ReactiveFormsModule],
    declarations: [AboutComponent, TemperatureDirective, WeatherItemComponent, WeatherListComponent, WeatherSearchComponent],
    exports: [AboutComponent]
})
export class AboutModule { }
