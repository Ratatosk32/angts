import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { WeatherListComponent } from './weather.component';
import { WeatherItemComponent } from './weather-item.component';


@NgModule({
    imports: [CommonModule, MdCardModule],
    declarations: [WeatherListComponent, WeatherItemComponent],
    exports: [WeatherListComponent]
})
export class WeatherModule { }
