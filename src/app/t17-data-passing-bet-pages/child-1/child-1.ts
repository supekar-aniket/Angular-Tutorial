import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-1',
  imports: [],
  templateUrl: './child-1.html',
  styleUrl: './child-1.css',
})
export class Child1 {

  @Input() data!:string;

  constructor(){}

  ngOnInit():void{
  }

  @Output() dataFromChild1 = new EventEmitter<string>();

  sendData(){
    this.dataFromChild1.emit('Hello form chid-1');
  }

  // parent to child-1
  @Input() parentData!:string;

  ngOnChanges(changes: SimpleChanges){
    if(changes['parentData']){
      console.log('Received from parents:', this.parentData);
      
    }
  }

}
