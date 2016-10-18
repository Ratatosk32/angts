import { Component } from '@angular/core';

export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
   }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}

//TODO: separate to template/component and consider about formatter(indifferently to IDE)
@Component({
 selector: 'reddit-article',
 host: {
   class: 'row'
 },
 inputs: ['article'],
 template: `
     <div class="four wide column center aligned votes">
      <div class="ui statistic">
      <div class="value">
      {{ article.votes }}
      </div>
      <div class="label">
      Points
      </div>
      </div>
      </div>
      <div class="twelve wide column">
      <a class="ui large header" href="{{ article.link }}">
      {{ article.title }}
      </a>
      <div class="meta">({{ article.domain() }})</div>
      <ul class="ui big horizontal list voters">
      <li class="item">
      <a href (click)="voteUp()">
      <i class="arrow up icon"></i>
      upvote
      </a>
      </li>
      <li class="item">
      <a href (click)="voteDown()">
      <i class="arrow down icon"></i>
      downvote
      </a>
      </li>
      </ul>
      </div>
     `
     })


export class ArticleComponent {
  article: Article = new Article('Angular', 'http://angular.io', 3);

  votesUp(): void { this.article.voteUp(); }

  votesDown(): void { this.article.voteDown(); }
}
