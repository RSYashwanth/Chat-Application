import { Component } from '@angular/core';
import { ClickHandlerService } from 'src/services/click-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private clickHandlerService: ClickHandlerService) { }

  title = 'chat-app';

  handleClick(e: MouseEvent): void {
    this.clickHandlerService.handleClick(e);
  }

  getDisplay(): boolean {
    return this.clickHandlerService.isDisplay;
  }
}
