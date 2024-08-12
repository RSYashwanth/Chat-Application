import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketHandlerService {
  private socket!: WebSocket;
  private authToken: String = '';
  constructor() {}

  setAuthToken(token: string){
    this.authToken = token;
  }

  connect(): void {
    if(this.socket){
      this.socket.close();
    }
    this.socket = new WebSocket('ws://localhost:8081/ws?token='+this.authToken);
  }

  onOpen(callback: () => void): void {
    this.socket.onopen = (event) => {
      callback();
    };
  }

  onMessage(callback: (message: string) => void): void {
    this.socket.onmessage = (event) => {
      callback(event.data);
    };
  }

  onError(callback: (error: Event) => void): void {
    this.socket.onerror = (event) => {
      callback(event);
    };
  }

  onClose(callback: (event: CloseEvent) => void): void {
    this.socket.onclose = (event) => {
      callback(event);
    };
  }

  sendMessage(message: string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    }
    else{
      console.log("error");
    }
  }
}
