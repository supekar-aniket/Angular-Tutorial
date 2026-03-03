import { NumberSymbol, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pract01-components',
  imports: [NgForOf],
  templateUrl: './pract01-components.html',
  styleUrl: './pract01-components.css',
})
export class Pract01Components {

  // for API call
  constructor(private http:HttpClient){

  }

  ngOnInit() {
    this.getStudents();
  }

  // Task - 3
  user:any[] = [];
  getStudents(){
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.user = data;
      });
  }


  // task - 1
  numbers:number[] = [10,30,45,24,78];

  doubleNumber(value:number){
    this.numbers[value] = this.numbers[value] * 2;
  }

  // Task - 2
  sudents:Sudent[] = [{
    name:'Aniket',
    marks:70
  },
  {
    name:'Lata',
    marks:34
  },
  {
    name:'Arpita',
    marks:90
  },
  {
    name:'Anuja',
    marks:89
  },
  {
    name:"Rutuja",
    marks:35 
  },

]

  

}

class Sudent{
  name:string;
  marks:number;

  constructor(name:string,marks:number){
    this.name = name;
    this.marks = marks;
  }
}