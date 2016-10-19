import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdIconModule } from '@angular2-material/icon';
import { WeatherComponent } from './weather.component';
import { RedditComponent } from './reddit';
import { ArticleComponent } from './reddit-article';
import { MdInputModule } from '@angular2-material/input';

@NgModule({
    imports: [CommonModule, MdCardModule, MdRadioModule, MdInputModule, MdIconModule],
    declarations: [WeatherComponent, RedditComponent, ArticleComponent],
    exports: [WeatherComponent, RedditComponent, ArticleComponent]
})
export class WeatherModule { }
