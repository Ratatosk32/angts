
import { Component }        from '@angular/core';
//import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { WeatherService } from './weather.service';


@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [WeatherService],
})
export class AboutComponent {
 	isVisible: boolean = false;
 	private searchTermStream = new Subject<string>();

 	constructor (private weatherService: WeatherService) {}

 	search(term: string) {this.isVisible = false;  this.searchTermStream.next(term); }

 	items = this.searchTermStream
     .debounceTime(1000)
     .distinctUntilChanged()
     .switchMap((term: string) => this.weatherService.search(term))
     .subscribe(data => {this.isVisible = true; console.log(data); this.items =  data});;

 }
