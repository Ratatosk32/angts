import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { AuthenticationService, User } from '../shared/authentication/index'

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  providers: [AuthenticationService],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  constructor(private _service:AuthenticationService) {}

  ngOnInit() {
  }

  public user = new User('','');
  public errorMsg = '';

  login() {
    if(!this._service.login(this.user)) {
      this.errorMsg = ' FAILED';
    }
  }

}
