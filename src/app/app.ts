import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { T01Interpolation } from './t01-interpolation/t01-interpolation';
import { T02FunctionCall } from './t02-function-call/t02-function-call';
import { T03DataType } from './t03-data-type/t03-data-type';
import { Task01CounterApp } from './task01-counter-app/task01-counter-app';
import { T04Events } from './t04-events/t04-events';
import { T05GetAndSetValues } from './t05-get-and-set-values/t05-get-and-set-values';
import { T06IfElse } from './t06-if-else/t06-if-else';
import { T07ElseIf } from './t07-else-if/t07-else-if';
import { T08SwitchCase } from './t08-switch-case/t08-switch-case';
import { T09ForLoop } from './t09-for-loop/t09-for-loop';
import { T10Signals } from './t10-signals/t10-signals';
import { T11Effects } from './t11-effects/t11-effects';
import { T12TwoWayBinding } from './t12-two-way-binding/t12-two-way-binding';
import { Task02TodoList } from './task02-todo-list/task02-todo-list';
import { T13Directives } from './t13-directives/t13-directives';
import { T14Routing } from './t14-routing/t14-routing';

@Component({
  selector: 'app-root',
  imports: [T01Interpolation,T02FunctionCall,T03DataType,Task01CounterApp,T04Events,T05GetAndSetValues,T06IfElse,T07ElseIf,T08SwitchCase,T09ForLoop,T10Signals,T11Effects,T12TwoWayBinding,Task02TodoList,T13Directives,T14Routing,],
  templateUrl: './app.html',
  styleUrl: './app.css' 
})
export class App {
  protected readonly title = signal('Angular-Tutorial');
}
