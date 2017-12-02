import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {

    @Input('messages') messages: any[];
    @Input('colorBackRight') colorBackRight : string;
    @Input('colorFontRight') colorFontRight: string;
    @Input('colorBackLeft') colorBackLeft: string;
    @Input('colorFontLeft') colorFontLeft: string;

    textInput: string = '';

    constructor() {}

    ngOnInit() {
      // this.colorBackRight ? this.colorBackRight : '#007bff';
      // this.colorFontRight ? this.colorFontRight : '#ffffff';
      // this.colorBackLeft ? this.colorBackLeft : '#f8f9fa';
      // this.colorFontLeft ? this.colorFontLeft : '#343a40';
    }

    sendMessage() {
      let newMessage = {"text": this.textInput, "date":"", "userOwner":true};
      this.messages.push(newMessage);
      this.textInput = '';
    }

    onKey(event: any) {
      if (event.keyCode == 13) {
        this.sendMessage()
      }
    }
}
