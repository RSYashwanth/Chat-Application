import { Component, Input } from '@angular/core';
import { ApiHandlerService } from 'src/services/api-handler.service';
import { MessageHandlerService } from 'src/services/message-handler.service';

@Component({
  selector: 'chat-options-popup',
  templateUrl: './options-popup.component.html',
  styleUrls: ['./options-popup.component.css']
})
export class OptionsPopupComponent {
  @Input() hoverColor!: string;
  @Input() baseColor!: string;
  @Input() message!: any;

  constructor( private apiHandlerService: ApiHandlerService, private messageHandlerService: MessageHandlerService ) {}

  deleteChat(){
    this.messageHandlerService.deleteChat(this.message);
  }
}
