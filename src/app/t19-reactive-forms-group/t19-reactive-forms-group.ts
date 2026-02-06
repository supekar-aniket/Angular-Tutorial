import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-t19-reactive-forms-group',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './t19-reactive-forms-group.html',
  styleUrl: './t19-reactive-forms-group.css',
})
export class T19ReactiveFormsGroup {

  profileForm = new FormGroup({
    name : new FormControl('',[Validators.maxLength(50),Validators.required]),
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.minLength(6),Validators.required])
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
