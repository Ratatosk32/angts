import { Component, OnInit } from '@angular/core';
//import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { WeatherService } from './weather.service';

@Component({
  moduleId: module.id,
  selector: 'sd-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
  providers: [WeatherService],
})
export class WeatherComponent {
 	isVisible: boolean = false;
 	private searchTermStream = new Subject<string>();

 	constructor (private weatherService: WeatherService) {}

 	search(term: string) {this.isVisible = false;  this.searchTermStream.next(term); }
  convert(temp: number) { return ((temp -32)*5/9).toFixed(0); }

 	items = this.searchTermStream
     .debounceTime(1000)
     .distinctUntilChanged()
     .switchMap((term: string) => this.weatherService.search(term))
     .subscribe(data => {this.isVisible = true; console.log(data); this.items =  data});


 }
