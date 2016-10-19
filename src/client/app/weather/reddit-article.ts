import { Component, EventEmitter } from '@angular/core';


export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void { this.votes += 1; }

  voteDown(): void { this.votes -= 1; }
}

//TODO: separate to template/component and consider about formatter(indifferently to IDE)
@Component({
 selector: 'reddit-article',
 host: {
   class: 'row'
 },
 inputs: ['article'],
 outputs: ['removeEmitter'],
 template: `
     <div class="one wide column center aligned votes">
       <div class="ui statistic">
         <div class="value">{{ article.votes }}</div>
         <div class="label">Votes</div>
       </div>
     </div>
     <div class="three wide column ui middle aligned">
       <a class="ui large header" target="_blank" href="{{ article.link }}">{{ article.title }}</a>
       <ul class="ui big horizontal list voters">
         <li class="item"><a (click)="votesUp();false"><i class="arrow up icon" style="color: #009688;"></i></a></li>
         <li class="item"><a (click)="votesDown();false"><i class="arrow down icon" style="color: red;"></i></a></li>
       </ul>
      </div>
      <div class="twelve wide column ui right aligned" >
        <button md-fab style="background-color: light-grey" disabled><md-icon>create</md-icon></button>
        <button md-fab style="background-color: grey" (click)="remove();"><md-icon>delete</md-icon></button>
      </div>
     `
     })


export class ArticleComponent {
  article: Article;

  removeEmitter: EventEmitter<Article>;

  constructor() {
    this.removeEmitter = new EventEmitter();
  }

  votesUp(): void { this.article.voteUp(); }

  votesDown(): void { this.article.voteDown(); }

  remove(): void { this.removeEmitter.emit(this.article); }
}
