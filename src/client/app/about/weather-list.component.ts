import {Component, OnInit} from "@angular/core";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="item of weatherItems" [weatherItem]="item"></weather-item>
        </section>
    `,
    providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];
    constructor(private _weatherService: WeatherService) {}
    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}
