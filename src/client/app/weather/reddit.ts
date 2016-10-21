import {Component} from "@angular/core";
import {Article} from "./reddit-article";


//TODO: separate to template/component and rename it
@Component({
  selector: 'reddit',
  template: `

        <md-card>
            <button md-fab style="background-color: #009688" (click)="addArticle(newTitle, newLink)">
                <md-icon>add</md-icon>
            </button>
            <div class="one wide column ui middle aligned">
                <md-input #newTitle name="title" ngDefaultControl placeholder="Name"></md-input>
                <md-input #newLink name="link" ngDefaultControl placeholder="Link"></md-input>
            </div>

            <div class="ui grid posts">
                <reddit-article *ngFor="let article of sortedArticles()" [article]="article"
                      (removeEmitter)="removeArticle($event)"></reddit-article>
            </div>
        </md-card>
        `
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

  removeArticle(article: Article): void {
    this.articles.forEach(function (element, index, array) {
      // TODO: change to ID
      if (element.title == article.title) {
        array.splice(index, 1);
        return true;
      }
      return false;
    });
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
