import { Component } from '@angular/core';

@Component({
  selector: 'app-t09-for-loop',
  imports: [],
  templateUrl: './t09-for-loop.html',
  styleUrl: './t09-for-loop.css',
})
export class T09ForLoop {

  user = ["Aniket","Arpita","Rutuja","Akash"];

  students = [
    {name:"Aniket",age:23,email:"aniket@test.com"},
    {name:"Arpita",age:24,email:"arpita@test.com"},
    {name:"Rutuja",age:25,email:"rutuja@test.com"},
    {name:"Akash",age:21,email:"akash@test.com"}
  ]

  getName(name:string){
    console.log(name);
  }
}
