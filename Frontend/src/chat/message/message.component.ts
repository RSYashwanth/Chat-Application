import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  messageObjs: any = [];
  colors = {  teal: "rgb(0, 181, 133)", tealHover: "rgb(196, 255, 239)", 
              orange: "rgb(225, 135, 0)", orangeHover: "rgb(255, 239, 215)",
              pink: "rgb(255, 88, 169)", pinkHover: "rgb(255, 204, 231)", 
              red: "rgb(255, 0, 76)", redHover: "rgb(255, 201, 219)",
              purple: "rgb(163, 58, 255)", purpleHover: "rgb(231, 206, 255)",
              green: "rgb(200, 219, 81)", greenHover: "rgb(215, 216, 203)"};
  base!: string;
  hover!: string;

  @Input() messages!: any[];
  @Input() user!: string;
  @Input() color!: string;

  ngOnInit(){
    this.messageObjs = [];
    this.messages.forEach((message)=>{
      this.messageObjs.push({message: message, hover: false, clicked: false});
    })

    switch(this.color){
      case "teal":  this.base = this.colors.teal;
                    this.hover = this.colors.tealHover;
                    break;
      case "orange":  this.base = this.colors.orange;
                    this.hover = this.colors.orangeHover;
                    break;
      case "pink":  this.base = this.colors.pink;
                    this.hover = this.colors.pinkHover;
                    break;
      case "red":  this.base = this.colors.red;
                    this.hover = this.colors.redHover;
                    break;
      case "purple":  this.base = this.colors.purple;
                    this.hover = this.colors.purpleHover;
                    break;
      case "green":  this.base = this.colors.green;
                    this.hover = this.colors.greenHover;
                    break;
    }
  }

  ngOnChanges(){
    this.messageObjs = [];
    this.messages.forEach((message)=>{
      this.messageObjs.push({message: message, hover: false, clicked: false});
    })
  }

  optionsClicked(message: { clicked: boolean; }){
    message.clicked = !message.clicked;
  }

  unclick(message: {clicked: boolean}){
    message.clicked = false;
  }
}

