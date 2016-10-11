import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { WeatherComponent } from './weather.component';
import { MdInputModule } from '@angular2-material/input';

@NgModule({
    imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule],
    declarations: [WeatherComponent],
    exports: [WeatherComponent]
})
export class WeatherModule { }
