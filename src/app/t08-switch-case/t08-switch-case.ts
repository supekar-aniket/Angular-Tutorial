import { Component } from '@angular/core';

@Component({
  selector: 'app-t08-switch-case',
  imports: [],
  templateUrl: './t08-switch-case.html',
  styleUrl: './t08-switch-case.css',
})
export class T08SwitchCase {

  mode: string = 'view';  // could be 'view', 'edit', 'delete', etc

  setMode(newMode: string) {
    this.mode = newMode;
  }
}
