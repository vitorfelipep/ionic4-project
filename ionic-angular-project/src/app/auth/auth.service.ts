import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userAutheticated = true;
  private _userId = 'abc';

  constructor() { }

  get isUserAuthenticated(): boolean {
    return this._userAutheticated;
  }

  get userId() {
    return this._userId;
  }

  login() {
    this._userAutheticated = true;
  }

  logout() {
    this._userAutheticated = false;
  }
}
