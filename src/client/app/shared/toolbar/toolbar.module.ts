import {NgModule} from "@angular/core";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule} from "@angular2-material/icon";
import {ToolbarComponent} from "./toolbar.component";
import {MdMenuModule} from "@angular2-material/menu";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule, CommonModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})

export class ToolbarModule {
}
