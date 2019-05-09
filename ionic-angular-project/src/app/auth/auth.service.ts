import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userAutheticated = true;

  constructor() { }

  get isUserAuthenticated(): boolean {
    return this._userAutheticated;
  }

  login() {
    this._userAutheticated = true;
  }

  logout() {
    this._userAutheticated = false;
  }
}
