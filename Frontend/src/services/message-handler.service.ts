import { Injectable } from '@angular/core';
import { SocketHandlerService } from './socket-handler.service';
import { AuthHandlerService } from './auth-handler.service';
import { ApiHandlerService } from './api-handler.service';

interface messageInterface{
  user: string,
  messages: any[],
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {

  messages: messageInterface[] = [];
  users: string[] = [];
  username = '';
  chat = '';

  constructor(
    private socketHandlerService: SocketHandlerService, 
    private authHandlerService: AuthHandlerService,
    private apiHandlerService: ApiHandlerService,
  ){  }

  switchChat(chat: any){
    this.messages = [];
    this.users = chat.users;
    this.chat = chat.name;
    this.apiHandlerService.getData('messages/'+this.chat).subscribe(
      (response) => {
        for(let message of response){
          if(this.messages.length > 0 && message.sender == this.messages[this.messages.length-1].user){
            this.messages[this.messages.length-1].messages.push(message);
          }
          else{
            let newMessage = {user: message.sender, messages: [message], color:this.getColor(message.sender)};
            this.messages.push(newMessage);
          }
        }
      }
    );
  }

  post(messageToSend: string){
    this.socketHandlerService.sendMessage(JSON.stringify({sender: this.authHandlerService.getUsername(), chat: this.chat, message: messageToSend}));
  }

  start(scroll: Function){
    this.socketHandlerService.setAuthToken(this.authHandlerService.getAuthToken());
    this.socketHandlerService.connect();
    this.socketHandlerService.onMessage((response: string) => {
      let message = JSON.parse(response);
      if(message.chat == this.chat){
        if(this.messages.length > 0 && message.sender == this.messages[this.messages.length-1].user){
          this.messages[this.messages.length-1].messages.push(message);
          this.messages[this.messages.length-1].messages = [...this.messages[this.messages.length-1].messages];
        }
        else{
          let newMessage = {user: message.sender, messages: [message], color: this.getColor(message.sender)}
          this.messages.push(newMessage);
        }
        scroll();
      }
    });
  }

  deleteChat(message: any){
    this.apiHandlerService.postData("", "messages/"+ message._id).subscribe(
      (response) => {
        this.messages = [];
        this.chat = message.chat;
        this.apiHandlerService.getData('messages/'+this.chat).subscribe(
        (response) => {
          for(let message of response){
            if(this.messages.length > 0 && message.sender == this.messages[this.messages.length-1].user){
              this.messages[this.messages.length-1].messages.push(message);
            }
            else{
              let newMessage = {user: message.sender, messages: [message], color:this.getColor(message.sender)};
              this.messages.push(newMessage);
            }
          }
        }
      );
      },
      (error) => {
        console.log(error);
      });
  }

  search(prompt: string) {
    return this.apiHandlerService.postData({name: this.chat, prompt: prompt}, "chats/search")
  }

  getColor(user: string){
    let colors = ['teal', 'orange', 'pink', 'red', 'purple', 'green'];
    return colors[this.users.indexOf(user)%colors.length];
  }
}
