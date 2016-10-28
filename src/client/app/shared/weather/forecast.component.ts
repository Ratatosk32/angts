import {Component} from "@angular/core";
import {WeatherShortDescription} from "./weather.component";

@Component({
  selector: 'forecast-card',
  inputs: ['item'],
  template:  `
       <div>{{item.day}}, {{item.date.substring(0,7)}}</div>
       <div><b>&nbsp;&nbsp;{{convert(item.low)}}</b>..<b>{{convert(item.high)}}</b><sup><b>o</b></sup><b>C</b></div>
       <img src="http://l.yimg.com/a/i/us/we/52/{{item.code}}.gif"/>`
})

export class ForecastComponent {
  item: WeatherShortDescription;
  convert(temp: number) {
    return ((temp - 32) * 5 / 9).toFixed(0);
  }
}

