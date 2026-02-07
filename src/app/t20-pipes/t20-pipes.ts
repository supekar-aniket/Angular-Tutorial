import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-t20-pipes',
  imports: [CommonModule],
  templateUrl: './t20-pipes.html',
  styleUrl: './t20-pipes.css',
})
export class T20Pipes {

  title : string = 'Angular Pipes Example';

  username : string = 'Aniket Supekar';

  date : Date = new Date();

  price  = 125.67898;

  user = {
    id:1,
    name:'Aniket Supekar',
    email:'aniekt@gmail.com'
  };

  users = ['Aniket', 'Rahul', 'Pooja', 'Sneha'];

  message = 'hello angular world';

}
