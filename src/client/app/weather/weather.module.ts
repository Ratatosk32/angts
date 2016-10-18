import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { WeatherComponent } from './weather.component';
import { RedditComponent } from './reddit';
import { MdInputModule } from '@angular2-material/input';

@NgModule({
    imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule],
    declarations: [WeatherComponent, RedditComponent],
    exports: [WeatherComponent, RedditComponent]
})
export class WeatherModule { }
