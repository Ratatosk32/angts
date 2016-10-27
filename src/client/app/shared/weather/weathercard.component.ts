import {Component, EventEmitter} from "@angular/core";
import {WeatherShortDescription, WeatherItem} from "./weather.component";

@Component({
  selector: 'weather-card',
  inputs: ['weatherItem'],
  outputs: ['removeEmitter'],
  template:  `
    <md-card style="display: flex; justify-content: space-between; margin: 10px;">
    <!--current weather details-->
    <div>
      <img src="http://l.yimg.com/a/i/us/we/52/{{weatherItem?.code}}.gif"/>
      <div><h1><b>{{convert(weatherItem?.temperature)}}</b><sup><b>o</b></sup><b>C</b></h1></div>
    </div>
    <div>
      <div><b>{{ weatherItem?.city }}, {{ weatherItem?.country }}</b></div>
      <div>Today: {{ weatherItem?.todayDate }}</div>
      <div>Sunrise: {{ weatherItem?.sunrise }}</div>
      <div>Sunset: {{ weatherItem?.sunset }}</div>
    </div>
    <!--forecast summary-->
    <forecast-card *ngFor="let item of weatherItem?.forecast" [item]="item"></forecast-card>
     <md-icon style="cursor: pointer;" svgSrc="./assets/images/close.svg" (click)="remove()">close</md-icon>
    </md-card>`
})

export class WeatherCardComponent {
  weatherItem: WeatherItem;

  removeEmitter: EventEmitter<any>;
  constructor() {
    this.removeEmitter = new EventEmitter();
  }
  convert(temp: number) {
    return ((temp - 32) * 5 / 9).toFixed(0);
  }
  remove(): void {
    this.removeEmitter.emit(this.weatherItem);
  }
}

