import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdCardModule} from "@angular2-material/card";
import {MdRadioModule} from "@angular2-material/radio";
import {MdIconModule} from "@angular2-material/icon";
import {MdInputModule} from "@angular2-material/input";
import {RedditModule} from "../shared/reddit/reddit.module";
import {YoutubeModule} from "../shared/youtube/youtube.module";
import {WeatherModule} from "../weather/weather.module";
import {MainComponent} from "./main.component";

@NgModule({
  imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule, MdIconModule, RedditModule, YoutubeModule,
    WeatherModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})

export class MainModule {
}
