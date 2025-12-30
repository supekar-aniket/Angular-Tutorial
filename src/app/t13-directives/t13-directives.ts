import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-t13-directives',
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './t13-directives.html',
  styleUrl: './t13-directives.css',
})
export class T13Directives {
  show = true
  // show = false

  // *ngFor directives
  student = ['Aniket','Arpita','Anuja','Akash','Krushna']

  studentData = [
    {
        name:'Aniket',
        age:23,
        email:'aniket@test.com'
    },
    {
        name:'Arpita',
        age:24,
        email:'arpita@test.com'
    },
    {
        name:'Rutuja',
        age:25,
        email:'rutuja@test.com'
    },
    {
        name:'Akash',
        age:21,
        email:'akash@test.com'
    },
  ]

  // *ngSwitch directives
  color = ""

  changeColor(value:string){
    this.color = value
  }

}
