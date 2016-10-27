import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GeoComponent} from "./geo.component";
import {Ng2MapModule} from "ng2-map";

@NgModule({
  imports: [CommonModule, Ng2MapModule],
  declarations: [GeoComponent],
  exports: [GeoComponent]
})

export class GeoModule {}
