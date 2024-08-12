import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickHandlerService {

  isDisplay: boolean = false;
  isLogin: boolean = true;

  handleClick(e: MouseEvent): void {
    if ((e.target as Element).className === "popup" || (e.target as Element).className === "close-button") {
      this.isDisplay = false;
    }
    if ((e.target as Element).className === "start-button" || (e.target as Element).className === "login-btn") {
      this.isDisplay = true;
    }
    if ((e.target as Element).className === "switch-login") {
      this.isLogin = true;
    }
    if ((e.target as Element).className === "switch-sign-up") {
      this.isLogin = false;
    }
  }
}