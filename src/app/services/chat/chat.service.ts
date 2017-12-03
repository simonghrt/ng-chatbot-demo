import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Message } from '../../models/message'

@Injectable()
export class ChatService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private idNgrok: string = '9d350345';
  private urlNgrok: string ='http://' + this.idNgrok + '.ngrok.io';
  private urlSendMessage: string = this.idNgrok ? this.urlNgrok + '/message/' : 'localhost:8000/message/';

  constructor(private http: Http) { }

    sendMessage(message: any): Promise<any> {
    return this.http.post(this.urlSendMessage, message, this.options).toPromise()
      // .then(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
