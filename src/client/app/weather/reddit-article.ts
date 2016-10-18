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
 template: `
     <div class="four wide column center aligned votes">
       <div class="ui statistic">
         <div class="value">{{ article.votes }}</div>
         <div class="label">Points</div>
       </div>
     </div>
     <div class="twelve wide column">
       <a class="ui large header" href="{{ article.link }}">{{ article.title }}</a>
       <ul class="ui big horizontal list voters">
         <li class="item"><a (click)="votesUp(); false"><i class="arrow up icon"></i></a></li>
         <li class="item"><a (click)="votesDown(); false"><i class="arrow down icon"></i></a></li>
       </ul>
     </div>`
     })


export class ArticleComponent {
  article: Article = new Article('Angular', 'http://angular.io', 3);

  votesUp(): void { this.article.voteUp(); }

  votesDown(): void { this.article.voteDown(); }
}
