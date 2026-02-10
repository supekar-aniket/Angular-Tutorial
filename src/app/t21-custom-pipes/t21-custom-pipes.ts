import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UppercasePipePipe } from '../pipes/uppercase-pipe-pipe';
import { LowercasePipePipe } from '../pipes/lowercase-pipe-pipe';
import { NapipePipe } from '../pipes/napipe-pipe';
import { TitlecasePipePipe } from '../pipes/titlecase-pipe-pipe';

@Component({
  selector: 'app-t21-custom-pipes',
  imports: [CommonModule,UppercasePipePipe,LowercasePipePipe,NapipePipe,TitlecasePipePipe],
  templateUrl: './t21-custom-pipes.html',
  styleUrl: './t21-custom-pipes.css',
})
export class T21CustomPipes {

  employees = EMPLOYEE;

}

export const EMPLOYEE = [
  {
    "id": 1,
    "name": "Aniket Supekar",
    "email": "aniket@gmail.com",
    "age": 23,
    "city": "Pune",
    "role": "Developer"
  },
  {
    "id": 2,
    "name": "Rahul Patil",
    "email": "rahul@gmail.com",
    "age": 25,
    "city": "",
    "role": "Tester"
  },
  {
    "id": 3,
    "name": "Sneha Joshi",
    "email": "sneha@gmail.com",
    "age": 24,
    "city": "Nagpur",
    "role": "Designer"
  },
  {
    "id": 4,
    "name": "Amit Sharma",
    "email": "amit@gmail.com",
    "age": "",
    "city": "Delhi",
    "role": "Manager"
  },
  {
    "id": 5,
    "name": "Pooja Verma",
    "email": "pooja@gmail.com",
    "age": 22,
    "city": "Indore",
    "role": "HR"
  },
  {
    "id": 6,
    "name": "Kunal Mehta",
    "email": "kunal@gmail.com",
    "age": 27,
    "city": "Ahmedabad",
    "role": ""
  },
  {
    "id": 7,
    "name": "Neha Kulkarni",
    "email": "neha@gmail.com",
    "age": 26,
    "city": "Kolhapur",
    "role": "Support"
  },
  {
    "id": 8,
    "name": "Rohit Singh",
    "email": "rohit@gmail.com",
    "age": 29,
    "city": "Bhopal",
    "role": ""
  },
  {
    "id": 9,
    "name": "Priya Nair",
    "email": "priya@gmail.com",
    "age": 24,
    "city": "Kochi",
    "role": "Marketing"
  },
  {
    "id": 10,
    "name": "Vikas Rao",
    "email": "vikas@gmail.com",
    "age": 31,
    "city": "Bengaluru",
    "role": "Team Lead"
  }
]
