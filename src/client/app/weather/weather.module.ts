import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdCardModule} from "@angular2-material/card";
import {MdRadioModule} from "@angular2-material/radio";
import {MdIconModule} from "@angular2-material/icon";
import {WeatherComponent} from "./weather.component";
import {MdInputModule} from "@angular2-material/input";
import {YoutubePlayerMiniModule} from "ng2-youtube-player-mini/ng2-youtube-player-mini";
import {RedditModule} from "../shared/reddit/reddit.module";

@NgModule({
  imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule, MdIconModule, YoutubePlayerMiniModule,
    RedditModule],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})

export class WeatherModule {
}
