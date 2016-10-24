import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

export class User {
  constructor(public email: string,
              public password: string) {
  }
}

var users = [
  new User('admin', 'admin')
];

@Injectable()
export class AuthenticationService {

  constructor(private _router: Router) {
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['']);
  }

  login(user: User) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      //localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['weather']);
      return true;
    }
    return false;
  }
/*
  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['home']);
    }
  }*/
}
