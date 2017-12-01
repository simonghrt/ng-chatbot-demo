import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {
    
    @Input('messages') messages: any[];
    

    title = 'app works!';
}
