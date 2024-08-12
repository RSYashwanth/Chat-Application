import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatHandlerService } from 'src/services/chat-handler.service';

@Component({
  selector: 'chat-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.css']
})
export class ChatPopupComponent {
  users = "";
  name = "";

  constructor(private chatHandlerService: ChatHandlerService) { }

  @Output() isDisplay = new EventEmitter<boolean>();

  createChat(){
    console.log(this.name);
    if(this.users.length != 0 && this.name.length != 0){
      this.chatHandlerService.createChat(this.name, this.users);
      this.isDisplay.emit(false);
    }
  }
}
