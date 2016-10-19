import { Component } from '@angular/core';
import { Article } from './reddit-article';

//TODO: separate to template/component and rename it
@Component({
  selector: 'reddit',
  template: `
            <button class="newOne" md-fab (click)="addArticle(newTitle, newLink)"><md-icon>add</md-icon></button>
            <div class="one wide column ui middle aligned">
                <md-input #newTitle name="title" ngDefaultControl placeholder="Name"></md-input>
                <md-input #newLink name="link" ngDefaultControl placeholder="Link"></md-input>
            </div>

            <div class="ui grid posts">
                <reddit-article *ngFor="let article of sortedArticles()" [article]="article"></reddit-article>
            </div>`
  })

export class RedditComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('StackOverflow', 'http://stackoverflow.com/', 10)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
