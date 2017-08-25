import { Component } from '@angular/core';
//import { HubConnection, HttpConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

 constructor(){
  //const http = new HttpConnection('http://localhost:9000/events');
//  const hub = new HubConnection(http);
 }

}
