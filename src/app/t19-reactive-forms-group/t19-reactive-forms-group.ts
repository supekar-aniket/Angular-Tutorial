import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-t19-reactive-forms-group',
  imports: [ReactiveFormsModule],
  templateUrl: './t19-reactive-forms-group.html',
  styleUrl: './t19-reactive-forms-group.css',
})
export class T19ReactiveFormsGroup {

  profileForm = new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    password : new FormControl()
  })

  onSubmit(){
    console.log(this.profileForm.value);
    
    this.profileForm.patchValue({
      name:'',
      email:'',
      password:''
    })
  }

  setValue(){
     this.profileForm.setValue({
     name:'peter',
     email:'aniket@test.com',
     password:'aniket@123'
     }) 
  }

}
