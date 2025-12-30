import { Component } from '@angular/core';

@Component({
  selector: 'app-t05-get-and-set-values',
  imports: [],
  templateUrl: './t05-get-and-set-values.html',
  styleUrl: './t05-get-and-set-values.css',
})
export class T05GetAndSetValues {

  name:string = "";

  getName(event:Event){
    
    this.name = (event.target as HTMLInputElement).value;
    // console.log("Value : ",(event.target as HTMLInpu tElement).value);
  }

  displayName  = "";
  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Set perticular name";
  }

  email:string|number = "";

  getEmail(val:string|number){
    console.log(val);
    this.email = val;
  }

  setEmail(){
    this.email = "default@text.com";
  }

}
