import {Component} from "@angular/core";
import {AuthenticationService} from "../authentication/authentication.service";

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  providers: [ AuthenticationService]
})

export class ToolbarComponent {
  constructor(private _service: AuthenticationService){};

  logout() { this._service.logout(); }

  isAuthenticated() { return this._service.getIsAuthenticated(); }
}

