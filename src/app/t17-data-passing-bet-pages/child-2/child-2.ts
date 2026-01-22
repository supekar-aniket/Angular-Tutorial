import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.html',
  styleUrl: './child-2.css',
})
export class Child2 {

  msg1 = "Hii from child-2...!"

  @Output() event = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void{
  }

  sendMsg(){
    this.event.emit(this.msg1)
  }

  // child-1 to child-2
  @Input() child1Data!:string;
  

}
