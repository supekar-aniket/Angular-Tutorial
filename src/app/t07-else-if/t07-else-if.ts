import { Component } from '@angular/core';

@Component({
  selector: 'app-t07-else-if',
  imports: [],
  templateUrl: './t07-else-if.html',
  styleUrl: './t07-else-if.css',
})
export class T07ElseIf {

  inputValue = 1;

  handleInput(value: number | Event) {

    if (typeof value === 'number') {
      this.inputValue = value;
    } else {
      this.inputValue = parseInt((value.target as HTMLInputElement).value);
    }
  }
}
