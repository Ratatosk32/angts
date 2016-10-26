import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/Rx";
import {WeatherService} from "./weather.service";

export class WeatherShortDescription {
  date: string;
  day: string;
  high: string;
  low: string;
  code: string;
  text: string;
  constructor(item: any) {
    this.date = item.date;
    this.day = item.day;
    this.high = item.high;
    this.low = item.low;
    this.code = item.code;
    this.text = item.text;
  }
}

export class WeatherItem {
  sunrise: string;
  sunset: string;
  todayDate: string;
  city: string;
  country: string;
  condition: string;
  code: number;
  temperature: number;
  forecast: WeatherShortDescription[] = [];
  constructor(item: any) {
    if (item != null && item != undefined) {
      this.sunrise = item.astronomy.sunrise;
      this.sunset = item.astronomy.sunset;
      this.city = item.location.city;
      this.country = item.location.country;
      this.todayDate = item.item.condition.date.substring(0,11);
      this.condition = item.item.condition.text;
      this.temperature = item.item.condition.temp;
      this.code = item.item.condition.code;
      item.item.forecast.forEach((item: any) => {this.forecast.push(new WeatherShortDescription(item))});
    }
  }
}

@Component({
  moduleId: module.id,
  selector: 'weather-search',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
  providers: [WeatherService],
})
export class WeatherComponent {
  isVisible: boolean = false;
  private searchTermStream = new Subject<string>();

  weatherItem: WeatherItem;
  weatherItems: WeatherItem[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {}

  search(term: string) {
    this.isVisible = false;
    this.searchTermStream.next(term);
  }

  convert(temp: number) {
    return ((temp - 32) * 5 / 9).toFixed(0);
  }

  item = this.searchTermStream
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((term: string) => this.weatherService.search(term))
    .subscribe(data => {
      if (data.query.results != null) {
        this.item = data.query.results.channel;
        this.weatherItem = new WeatherItem(this.item);
        if (this.weatherItem.temperature
          && this.weatherItem.temperature != undefined
          && !isNaN(this.weatherItem.temperature)) {
          this.weatherItems.push(this.weatherItem);
        }
        this.isVisible = true;
      }
    });

  removeCard(item: WeatherItem): void {
    this.weatherItems.forEach(function (element, index, array) {
      // TODO: change to ID
      if (element.city == item.city) {
        array.splice(index, 1);
        return true;
      }
      return false;
    });
  }
}



