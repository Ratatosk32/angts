import { Component } from '@angular/core';

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
  constructor() {}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
   console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }
}
