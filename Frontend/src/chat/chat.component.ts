import { Component, HostListener, OnInit } from '@angular/core';
import { MessageHandlerService } from 'src/services/message-handler.service';
import { ChatHandlerService } from 'src/services/chat-handler.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  messageToSend = '';

  chatActive = false;

  chat = '';

  isChatPopup = false;
  isSearchPanel = false;

  searchPrompt = '';
  searchContent = 'Please enter a search prompt';

  constructor(
    public messageHandlerService: MessageHandlerService,
    private chatHandlerService: ChatHandlerService
  ){  }

  ngOnInit(){
    this.messageHandlerService.start(this.scroll);
    this.chatHandlerService.loadChats();
  }

  post(){
    this.messageHandlerService.post(this.messageToSend);
    this.messageToSend = "";
  }

  switchChat(chat: any, e: MouseEvent){
    console.log((e.target as Element).className);
    if((e.target as Element).className != "delete-chat"){
      this.chat = chat.name;
      this.messageHandlerService.switchChat(chat);
      this.scroll();
      this.chatActive = true;
    }
    else{
      this.chatActive = false;
    }
  }

  getChats(){
    return this.chatHandlerService.chats;
  }

  scroll(){
    const window = document.getElementById("msg-window");
    if(window){
      setTimeout(() => {
        window.scroll(0, window.scrollHeight);
      }, 100);
    }
  } 

  @HostListener('document:mouseup', ['$event'])
  documentClick(event: MouseEvent) {
    if((event.target as Element).className == "search" || (event.target as Element).className == "search-close"){
      this.isSearchPanel = !this.isSearchPanel;
    }
    if((event.target as Element).className == "add-button" || (event.target as Element).id == "popup"){
      this.isChatPopup = true;
    }
    else{
      this.isChatPopup = false;
    }
  }

  closePopup(state: boolean){
    this.isChatPopup = state;
  }

  deleteChat(chat: any){
    this.chatHandlerService.deleteChat(chat);
  }

  getUsers(){
    return this.messageHandlerService.users;
  }

  search(){
    this.searchContent = 'Please wait for a response';
    this.messageHandlerService.search(this.searchPrompt).subscribe(
      (response) => {
        this.searchContent = response.msg;
      },
      (error) => {
        console.error(error);
      }
    );
    this.searchPrompt = '';
  }

}
