import {Component} from "@angular/core";
import {Ng2MapComponent} from "ng2-map";

@Component({
  selector: 'geo-search',
  template: `
     <ng2-map style="width: 1280px; height: 800px;" [center]="Krakow"></ng2-map>`
})

export class GeoComponent {
  constructor() {
    Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=KEY";
  }
}
