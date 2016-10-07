import {Component} from "@angular/core";
import {WeatherItem} from "./weather-item";
import {TemperatureDirective} from "./temperature.directive";
@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">

                <p class="info">{{ item.description | uppercase }}</p>
            </div>
            <div class="col-2">
                <span class="temperature" >{{ item.temperature }}°C</span>
            </div>
        </article>
    `,
    inputs: ['item: weatherItem'],
    styleUrls: ['src/client/app/weather/weather-item.css'],
})
export class WeatherItemComponent {
    item:WeatherItem;
}
