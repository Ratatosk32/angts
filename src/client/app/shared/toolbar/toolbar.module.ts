import {NgModule} from "@angular/core";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule} from "@angular2-material/icon";
import {ToolbarComponent} from "./toolbar.component";
import {MdMenuModule} from "@angular2-material/menu";
import {CommonModule} from "@angular/common";
import {MdInputModule} from "@angular2-material/input";
import {MdCardModule} from "@angular2-material/card";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SidebarModule} from "ng2-sidebar";

@NgModule({
  imports: [MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule, CommonModule, MdInputModule, MdCardModule,
    FormsModule, RouterModule, SidebarModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})

export class ToolbarModule {
}
