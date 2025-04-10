import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _authenticated = false;

  constructor() {
    this._authenticated = localStorage.getItem('user') ? true : false;
  }

  login(username: string, password: string) {
    if (username === "username123" && password === "password123") {
      this._authenticated = true;
      localStorage.setItem('user', username)
    }
  }

  logout(): void {
    this._authenticated = false;
    localStorage.removeItem('user')
  }

  loggedIn(): boolean {
    return this._authenticated;
  }

  getUserName(): string | null {
    return localStorage.getItem('user');
  }

}
