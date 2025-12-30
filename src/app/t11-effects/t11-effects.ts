import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-t11-effects',
  imports: [],
  templateUrl: './t11-effects.html',
  styleUrl: './t11-effects.css',
})
export class T11Effects {

  userName = signal("Aniket");
  
  // Run Only one time when component is created
  // Setup things like variables, dependency injection
  constructor(){

    // output see in console. 

    //Runs every time dependent signal changes
    // React to signal changes (logging, API calls, updating UI)
    effect(()=>{
      console.log("User Name is:",this.userName());
      
    })
  }
}
