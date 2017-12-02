import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {

    @Input('text') text: string; 
    @Input('date') date: any;
    @Input('owner') owner: boolean;
    @Input('colorBackRight') colorBackRight : string;
    @Input('colorFontRight') colorFontRight: string;
    @Input('colorBackLeft') colorBackLeft: string;
    @Input('colorFontLeft') colorFontLeft: string;

    
}
