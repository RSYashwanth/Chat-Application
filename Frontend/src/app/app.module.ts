import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { ClickHandlerService } from '../services/click-handler.service';
import { ApiHandlerService } from '../services/api-handler.service';
import { AuthGuardService } from './authguard.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ChatModule } from 'src/chat/chat.module';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPopupComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChatModule,
  ],
  providers: [ClickHandlerService, ApiHandlerService, AuthGuardService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})  
export class AppModule { }
