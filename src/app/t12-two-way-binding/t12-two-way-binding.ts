import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-t12-two-way-binding',
  imports: [FormsModule],
  templateUrl: './t12-two-way-binding.html',
  styleUrl: './t12-two-way-binding.css',
})
export class T12TwoWayBinding {

  //// lengthy process.
  // name = "svff";

  // bindData(event:Event){

  //     const val = (event.target as HTMLInputElement).value;

  //     this.name = val;
  // }

  name = "Supes";
}
