import {Component} from "@angular/core";
import {Subject} from "rxjs";
import {YouTubeAPI} from "./youtube";

@Component({
  selector: 'youtube-search',
  template: `
        <md-card>
        <md-input #str (keyup)="searchTube(str.value)" class="home-input" ngDefaultControl
              placeholder="youtube search">
        </md-input>
        <div style=" position: relative; display: flex;">
        <div class="youtube-card" *ngFor="let video of results | async">
          <p>{{ video.snippet.title?video.snippet.title.substring(0,20):video.snippet.title }}</p>
        <!--<img class="image-size" [src]="video.snippet.thumbnails.default.url"/>-->
        <youtube-player [playerId]='"player"' [width]="320" [height]="240" [videoId]="video.id.videoId">
        </youtube-player>
        </div>
        </div>
        </md-card>
        `,
  providers: [YouTubeAPI]
})

export class SearchComponent {

  constructor(public youtube: YouTubeAPI) {}

  private searchTubeStream = new Subject<string>();

  searchTube(str: string) {
    this.searchTubeStream.next(str);
  }

  results = this.searchTubeStream
    .debounceTime(200)
    .distinctUntilChanged()
    .switchMap(query => this.youtube.search(query));
}
