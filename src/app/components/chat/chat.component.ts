import { Component, Input } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {

    BACK_ENABLED: boolean = true;

    @Input('messages') messages: any[];
    @Input('colorBackRight') colorBackRight : string;
    @Input('colorFontRight') colorFontRight: string;
    @Input('colorBackLeft') colorBackLeft: string;
    @Input('colorFontLeft') colorFontLeft: string;

    textInput: string = '';

    constructor(private chatService: ChatService) {}

    ngOnInit() {
      // this.colorBackRight ? this.colorBackRight : '#007bff';
      // this.colorFontRight ? this.colorFontRight : '#ffffff';
      // this.colorBackLeft ? this.colorBackLeft : '#f8f9fa';
      // this.colorFontLeft ? this.colorFontLeft : '#343a40';
    }

    sendMessage() {
      let newMessage = {"text": this.textInput, "date":"", "userOwner":true};
      this.messages.push(newMessage);
      let messageBack = {"firstname": "Simon", "text": this.textInput};
      if (this.BACK_ENABLED) {
          this.chatService.sendMessage(messageBack).then(
              (res) => {
                  let messageReturn = {"text": res.json().speech_answer, "date": "", "userOwner": false};
                  this.messages.push(messageReturn);
              });
      }
      this.textInput = '';
    }

    onKey(event: any) {
      if (event.keyCode == 13) {
        this.sendMessage()
      }
    }
}
