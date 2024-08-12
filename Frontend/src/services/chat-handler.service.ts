import { Injectable } from '@angular/core';
import { AuthHandlerService } from './auth-handler.service';
import { ApiHandlerService } from './api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ChatHandlerService {

  username!: string;

  constructor(private authHandlerService: AuthHandlerService, private apiHandlerService: ApiHandlerService) { }

  chats: any[] = [];

  loadChats(){
    this.username = this.authHandlerService.getUsername();
    this.apiHandlerService.getData('chats/'+this.username).subscribe(
      (response) => {
        this.chats = [];
        for(let chat of response){
          chat.isHovered = false;
          this.chats.push(chat);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createChat(name: string, users: string){
    let userArray = users.split(" ");
    this.apiHandlerService.postData({name: name, users: userArray}, "chats/new").subscribe(
      (respose) => {
        this.loadChats();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteChat(chat: any){
    this.apiHandlerService.postData({name: chat.name}, "chats/delete").subscribe(
      (respose) => {
        this.loadChats();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
