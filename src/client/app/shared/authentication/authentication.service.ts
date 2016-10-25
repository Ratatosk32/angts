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

  isAuthenticated: boolean = false;

  constructor(private _router: Router) {
  }

  logout() {
    localStorage.removeItem("user");
    this.isAuthenticated = false;
    this._router.navigate(['']);
  }

  login(user: User) {
    var authenticatedUser = users.find(u => u.email === user.email && u.password === user.password);
    if (authenticatedUser) {
      localStorage.setItem("user", authenticatedUser.toString());
      this._router.navigate(['main']);
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /*
   checkCredentials() {
   if (localStorage.getItem("user") === null) {
   this._router.navigate(['home']);
   }
   }*/
}
