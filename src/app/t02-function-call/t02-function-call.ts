import { Component } from '@angular/core';

@Component({
  selector: 'app-t02-function-call',
  imports: [],
  templateUrl: './t02-function-call.html',
  styleUrl: './t02-function-call.css',
})
export class T02FunctionCall {

  callFunction(){

    alert("Button Clicked!!!");

    // when we call another function inside other funtion then we need to define this keyword. Because this function inside the class so it tell to the function this function is in same clas.
    this.counter();
  }

  num = 1;
  counter(){
    console.log(this.num);
    this.num += 1;
  }
}
