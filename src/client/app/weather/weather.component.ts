import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import {YouTubeAPI} from "./youtube";
import "rxjs/Rx";
import {WeatherService} from "./weather.service";

@Component({
  moduleId: module.id,
  selector: 'sd-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
  providers: [WeatherService, YouTubeAPI],
})
export class WeatherComponent {
  isVisible: boolean = false;
  private searchTermStream = new Subject<string>();
  private searchTubeStream = new Subject<string>();

  constructor(public youtube: YouTubeAPI,
              private weatherService: WeatherService) {
  }

  ngOnInit() {}

  search(term: string) {
    this.isVisible = false;
    this.searchTermStream.next(term);
  }

  searchTube(str: string) {
    this.searchTubeStream.next(str);
  }

  convert(temp: number) {
    return ((temp - 32) * 5 / 9).toFixed(0);
  }

  items = this.searchTermStream
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((term: string) => this.weatherService.search(term))
    .subscribe(data => {
      this.isVisible = true;
      console.log(data);
      this.items = data
    });

  results = this.searchTubeStream
    .debounceTime(200)
    .distinctUntilChanged()
    .switchMap(query => this.youtube.search(query));
}



