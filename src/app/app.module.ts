// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

import { ChatService } from './services/chat/chat.service';

@NgModule({
  declarations: [
      AppComponent,
      ChatComponent,
      MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    ChatComponent
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
