import { Component, input } from '@angular/core';

@Component({
  selector: 'app-t04-events',
  imports: [],
  templateUrl: './t04-events.html',
  styleUrl: './t04-events.css',
})
export class T04Events {

  // when user click on button it display all info about buttons
  handleEvents(event:any){
    console.log("Function called...",event);
    console.log("Event type...",event.type);
    console.log("Event className...",(event.target as Element).className)
  }

  // when user click on button it display all info about buttons
  clickEvent(event:MouseEvent){
    console.log("Mouse Click...",event.target);
  }

  // Event call when mouse enter the box
  mouseEnter(event:MouseEvent){
    console.log("Mouse Enter...",event.target);
  }

  // Event call when mouse leave the box
  mouseLeave(event:MouseEvent){
    console.log("Mouse Leave...",event.target);
  }

  // Event call when user enter any value in input field
  inputEvent(event:Event){
    console.log("Mouse click...",event.type);
    console.log("Value",(event.target as HTMLInputElement).value);
  }

  // Event call when user click inside the input field
  focusEvent(event:Event){
    console.log("Click on input field....",event.type);
  }

}
