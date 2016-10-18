import { Component } from '@angular/core';

@Component({
  selector: 'reddit',
  template: `

    <h4 class="ui header">Add a Link</h4>
           <form class="home-form">
               <md-input #term name="title"
                         class="home-input" ngDefaultControl
                         placeholder="Name">
               </md-input>
               <md-input #term name="link"
                         class="home-input" ngDefaultControl
                         placeholder="Link">
               </md-input>
           </form>


  `
  })

export class RedditComponent {
  constructor() {}
}
