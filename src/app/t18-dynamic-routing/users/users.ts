import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule,Location } from '@angular/common';
import { USERS_DATA, User } from '../t18-dynamic-routing';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './users.html',
})
export class Users {

  user?: User;

  constructor(private route: ActivatedRoute,private location:Location) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.user = USERS_DATA.find(u => u.id === id);
    });
  }
  
  
  goBack() {
    this.location.back();
  }
}
