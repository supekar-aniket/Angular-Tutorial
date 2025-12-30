import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-t10-signals',
  imports: [],
  templateUrl: './t10-signals.html',
  styleUrl: './t10-signals.css',
})
export class T10Signals {

  x = 10;

  count = signal(20);
  // Data type of signals
  // count:WritableSignal<number | string> = signal(200);

  constructor(){

    effect(()=>{
      // effect() only tracks signals, not normal properties.In the combined effect, count’s change forces the effect to re-run, so x’s new value appears too. In the separate effect, x alone doesn’t trigger anything.

      console.log("x : ", this.x);
      // console.log(this.count());
    })

    effect(()=>{
      console.log("count : ", this.count());
    })
  }

  updateValue(){
    
    this.x += 1;
    this.count.set(this.count()+1);
  }

  changeValue(value:string){

    if(value=="dec"){
      this.count.set(this.count()-1);
    } else {
      this.count.set(this.count()+1);
    }
  }

  price = signal(50);
  qty = signal(3);

  total = computed(()=>this.price() * this.qty());

  showData(){

    console.log("Total value is:",this.total());
    this.qty.set(5);
    console.log("Total value is:",this.total());
    
  }

}
