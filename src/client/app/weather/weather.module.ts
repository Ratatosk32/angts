import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdCardModule} from "@angular2-material/card";
import {MdRadioModule} from "@angular2-material/radio";
import {MdIconModule} from "@angular2-material/icon";
import {WeatherComponent} from "./weather.component";
import {MdInputModule} from "@angular2-material/input";
import {RedditModule} from "../shared/reddit/reddit.module";
import {YoutubeModule} from "../shared/youtube/youtube.module";

@NgModule({
  imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule, MdIconModule, RedditModule, YoutubeModule],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})

export class WeatherModule {
}
