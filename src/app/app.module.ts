import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
      AppComponent,
      ChatComponent,
      MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ChatComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
