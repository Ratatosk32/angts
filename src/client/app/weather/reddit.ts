import { Component } from '@angular/core';
import { Article } from './reddit-article';

//TODO: separate to template/component and rename it
@Component({
  selector: 'reddit',
  template: `
           <h4 class="ui header">Add a Link</h4>
           <form class="home-form">
               <md-input #newTitle name="title"
                         class="home-input" ngDefaultControl
                         placeholder="Name">
               </md-input>
               <md-input #newLink name="link"
                         class="home-input" ngDefaultControl
                         placeholder="Link">
               </md-input>
           </form>

           <button md-button  color="primary" (click)="addArticle(newTitle, newLink)" type="submit" name="action">
               Submit
           </button>

           <div>
             <reddit-article></reddit-article>
           </div>
  `
  })

export class RedditComponent {
  articles: Article[];

  constructor() {
   this.articles = [
     new Article('Angular 2', 'http://angular.io', 3),
     new Article('Fullstack', 'http://fullstack.io', 2),
     new Article('Angular Homepage', 'http://angular.io', 1),
   ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }
}
