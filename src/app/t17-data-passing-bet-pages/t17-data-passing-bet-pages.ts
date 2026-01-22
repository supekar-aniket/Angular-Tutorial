import { Component } from '@angular/core';
import { Child1 } from "./child-1/child-1";
import { Child2 } from "./child-2/child-2";

@Component({
  selector: 'app-t17-data-passing-bet-pages',
  imports: [Child1, Child2],
  templateUrl: './t17-data-passing-bet-pages.html',
  styleUrl: './t17-data-passing-bet-pages.css',
})
export class T17DataPassingBetPages {

  // Child-2
  msg1 = ""
  receiveMSG($event:string){
    this.msg1 = $event
  }

  //parent to child-1
  dataForChild1 = '';

  sendToChild1(){
    this.dataForChild1 = 'Hello from parent!';
  }

  // Child-1 to child-2
  sharedData = '';

  receiveData(data:string){
    this.sharedData = data;
  }
}
