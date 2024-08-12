import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthHandlerService } from 'src/services/auth-handler.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public authHandlerService: AuthHandlerService, public router: Router) {}
  canActivate(): boolean {
    if (!this.authHandlerService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}