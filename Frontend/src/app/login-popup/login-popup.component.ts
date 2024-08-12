import { Component } from '@angular/core';
import { ClickHandlerService } from '../../services/click-handler.service';
import { AuthHandlerService } from 'src/services/auth-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {


  constructor(
    private clickHandlerService: ClickHandlerService, 
    private router: Router,
    private authHandlerService: AuthHandlerService,
  ) {}

  

  username: string = '';
  password: string = '';
  email: string = '';

  getLoginState(): boolean{
    return this.clickHandlerService.isLogin;
  }

  handleClick(e: MouseEvent): void {
    this.clickHandlerService.handleClick(e);
  }

  handleSubmit(): void {

    if(!this.getLoginState()){
      this.authHandlerService.sendRegisterRequest(this.username, this.password, this.email, () =>{
        this.authHandlerService.sendLoginRequest(this.username, this.password, () => {
          this.router.navigate(['chat']);
        });
      });
    }
    else{
      this.authHandlerService.sendLoginRequest(this.username, this.password, () => {
        this.router.navigate(['chat']);
      });
    }
  }

}
