import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthHandlerService {

  jwtToken: string = '';
  username: string = '';

  constructor(private apiHandlerService: ApiHandlerService, private jwtHelperService: JwtHelperService) { }

  isAuthenticated(): boolean {
    let isAuth = !this.jwtHelperService.isTokenExpired(this.jwtToken);
    return isAuth;
  }

  getAuthToken(): string{
    return this.jwtToken;
  }

  getUsername(): string{
    return this.username;
  }

  sendRegisterRequest(username: string, password: string, email: string, cb: () => void) {
    this.apiHandlerService.postData({username: username, password: password, email: email}, "register").subscribe(
      (response) => {
        cb();
      },
      (error) => {  }
    );
  }

  sendLoginRequest(username: string, password: string, cb: () => void){
    this.apiHandlerService.postData({username: username, password: password}, "login").subscribe(
      (response) => {
        if(response && response.token){
          // localStorage.setItem("username", username);
          // localStorage.setItem("token", response.token);
          this.username = username;
          this.jwtToken = response.token;
          cb();
        }
      },
      (error) => {  }
    );
  }
}
