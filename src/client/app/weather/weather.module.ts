import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { WeatherComponent } from './weather.component';


@NgModule({
    imports: [CommonModule, MdCardModule],
    declarations: [WeatherComponent],
    exports: [WeatherComponent]
})
export class WeatherModule { }
