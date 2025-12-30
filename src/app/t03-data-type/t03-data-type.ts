import { Component } from '@angular/core';

@Component({
  selector: 'app-t03-data-type',
  imports: [],
  templateUrl: './t03-data-type.html',
  styleUrl: './t03-data-type.css',
})
export class T03DataType {

  // property
  // name = "Aniket";

  // data type string
  name:string = "Aniket";
  // data type number
  age:number = 22;

  other:string|number = "abc";

  otherFuntion(){

    // only number
    this.age = 25;

    // // not string
    // this.age = "string";

    // it accept string and age also
    this.other = 22;

    // in function we create varibles like this
    let num:number = 50;
    console.log(num); // see in console
  }
}
