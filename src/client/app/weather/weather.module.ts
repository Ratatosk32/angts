import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { WeatherComponent } from './weather.component';
import { WeatherItemComponent } from './weather-item.component';


@NgModule({
    imports: [CommonModule, MdCardModule],
    declarations: [WeatherComponent, WeatherItemComponent],
    exports: [WeatherComponent]
})
export class WeatherModule { }
