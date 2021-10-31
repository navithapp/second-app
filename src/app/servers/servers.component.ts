import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowAddServer = false;
  serverCreationStatus = 'No new server is created';
  serverName = '';
  userName;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreation() {
    return this.serverCreationStatus= 'New server was created';
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearUserName() {
    this.userName = '';
  }


}
