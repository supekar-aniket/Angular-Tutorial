import { Component } from '@angular/core';

@Component({
  selector: 'app-t06-if-else',
  imports: [],
  templateUrl: './t06-if-else.html',
  styleUrl: './t06-if-else.css',
})
export class T06IfElse {

  display = true;

  show(){
    this.display = true;
  }

  hide(){
    this.display = false;
  }

  toggle(){
    this.display = !this.display;
  }

  changeColor = true;

  toggleDiv(){
    this.changeColor = !this.changeColor;
  }

}
