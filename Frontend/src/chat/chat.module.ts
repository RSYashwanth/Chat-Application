import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from '../chat/message/message.component';

import { ChatComponent } from './chat.component';
import { OptionsPopupComponent } from './options-popup/options-popup.component';
import { ChatPopupComponent } from './chat-popup/chat-popup.component';



@NgModule({
  declarations: [ChatComponent, MessageComponent, OptionsPopupComponent, ChatPopupComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChatModule { }
