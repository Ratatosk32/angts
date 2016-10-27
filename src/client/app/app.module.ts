import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routes} from "./app.routes";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./main/main.module";
import {YoutubeModule} from "./shared/youtube/youtube.module";
import {WeatherModule} from "./shared/weather/weather.module";
import {GeoModule} from "./shared/geo/geo.module";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), MainModule, HomeModule, YoutubeModule,
    WeatherModule, GeoModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule {
}
