import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdCardModule} from "@angular2-material/card";
import {MdIconModule} from "@angular2-material/icon";
import {MdInputModule} from "@angular2-material/input";
import {RedditComponent} from "./reddit.component";
import {ArticleComponent} from "./reddit-article";

@NgModule({
  imports: [CommonModule, MdCardModule, MdInputModule, MdIconModule],
  declarations: [RedditComponent, ArticleComponent],
  exports: [RedditComponent, ArticleComponent]
})

export class RedditModule {
}
