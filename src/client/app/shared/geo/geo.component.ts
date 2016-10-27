import {Component} from "@angular/core";
import {Ng2MapComponent} from "ng2-map";

@Component({
  selector: 'geo-search',
  template: `<div style="padding-left:100px;">
     <ng2-map style="width: 1280px; height: 600px;" [center]="Krakow"></ng2-map></div>`
})

export class GeoComponent {
  constructor() {
    Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=";
  }
}
