import { Component } from '@angular/core';

@Component({
  selector: 'app-task01-counter-app',
  imports: [],
  templateUrl: './task01-counter-app.html',
  styleUrl: './task01-counter-app.css',
})
export class Task01CounterApp {

  appTitle = "Counter App";

  count:number = 0;

  countIncrement(){
    this.count += 1;
  }

  countDecrement(){
    this.count -= 1;
    
    if(this.count <0){
      this.count = 0;
    }
  }

  countReset(){
    this.count = 0;
  }

}
