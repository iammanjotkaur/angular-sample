import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server created";
  serverName="TestServer";
  serverCreate=false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);

   
  }

  ngOnInit(): void {
  }
  onCreationServer(){
    this.serverCreate=true;
      this.serverCreationStatus=" Server Created "+ this.serverName;
  }
  onUpdateServerName(event: any){
    console.log(event);
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
