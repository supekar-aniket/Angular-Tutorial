import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-t18-dynamic-routing',
  imports: [CommonModule, RouterLink,],
  templateUrl: './t18-dynamic-routing.html',
  styleUrl: './t18-dynamic-routing.css',
})
export class T18DynamicRouting {

  users : User[] = USERS_DATA;

}

// export the data set
export interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  email: string;
}

export const USERS_DATA: User[] = [
  { id: 1, name: 'Aniket Supekar', age: 22, address: 'Pune, Maharashtra', email: 'aniket@gmail.com' },
  { id: 2, name: 'Rahul Patil', age: 24, address: 'Kolhapur, Maharashtra', email: 'rahul.patil@gmail.com' },
  { id: 3, name: 'Sneha Joshi', age: 21, address: 'Nashik, Maharashtra', email: 'sneha.joshi@gmail.com' },
  { id: 4, name: 'Amit Kulkarni', age: 25, address: 'Satara, Maharashtra', email: 'amit.k@gmail.com' },
  { id: 5, name: 'Pooja Deshmukh', age: 23, address: 'Aurangabad, Maharashtra', email: 'pooja.d@gmail.com' },
  { id: 6, name: 'Rohan Shinde', age: 26, address: 'Sangli, Maharashtra', email: 'rohan.shinde@gmail.com' },
  { id: 7, name: 'Arpita Pawar', age: 22, address: 'Solapur, Maharashtra', email: 'arpita.pawar@gmail.com' },
  { id: 8, name: 'Saurabh More', age: 27, address: 'Ahmednagar, Maharashtra', email: 'saurabh.more@gmail.com' },
  { id: 9, name: 'Komal Jadhav', age: 24, address: 'Jalgaon, Maharashtra', email: 'komal.j@gmail.com' },
  { id: 10, name: 'Pratik Bhosale', age: 23, address: 'Latur, Maharashtra', email: 'pratik.b@gmail.com' }
];

