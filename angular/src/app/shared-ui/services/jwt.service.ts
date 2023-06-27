import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  currentLoggedUserInfo: any = {};
  constructor() {
    this.getCurrentUser();
  }

  saveToken(token: string) {
    window.localStorage.setItem('celebsJwtToken', token);
  }
  getToken(): string {
    return window.localStorage.getItem('celebsJwtToken');
  }
  saveCurrentUser(userDetails) {

  }
  getCurrentUser(): any {
    if (window.localStorage.getItem('celebsJwtToken')) {
      this.currentLoggedUserInfo = JSON.parse(
        CryptoJS.AES.decrypt(
          window.localStorage.getItem('celebsCurrentUser'),
          window.localStorage.getItem('celebsJwtToken')
        ).toString(CryptoJS.enc.Utf8)
      );
      return this.currentLoggedUserInfo;
    }
  }
  destroyToken() {
    this.currentLoggedUserInfo = {};
    window.localStorage.removeItem('celebsJwtToken');
    window.localStorage.removeItem('celebsCurrentUser');
  }
}
