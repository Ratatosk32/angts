import {Component, OnInit} from "@angular/core";
import {AuthenticationService, User} from "../authentication/authentication.service";
import {Router} from "@angular/router";

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  providers: [AuthenticationService]
})

export class ToolbarComponent implements OnInit {
  public user = new User('', '');
  isAuth: boolean = false;
  failed: boolean = false;

  constructor(private _service: AuthenticationService, private _router: Router) {
  };

  logout() {
    this._service.logout();
    this.isAuth = false;
  }

  checkCredentials() {
    this.isAuth = this._service.getIsAuthenticated();
    this.failed = !this.isAuth
  }

  ngOnInit() {
  }

  login() {
    if (!this._service.login(this.user)) {
      this.isAuth = false;
      this.failed = true;
    } else {
      this.checkCredentials();
    }
  }

  private _open: boolean = false;

  toggleSidebar() {
    this._open = this.isAuth ? !this._open: false;
  }

  toGeo(): void {
    this._router.navigate(['geo']);
  }

  toYoutube(): void {
    this._router.navigate(['youtube']);
  }

  toWeather(): void {
    this._router.navigate(['weather']);
  }
}

