import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 't01', pathMatch: 'full' },

  {
    path: 't01',
    loadComponent: () =>
      import('./t01-interpolation/t01-interpolation')
        .then(m => m.T01Interpolation)
  },
  {
    path: 't02',
    loadComponent: () =>
      import('./t02-function-call/t02-function-call')
        .then(m => m.T02FunctionCall)
  },
  {
    path: 't03',
    loadComponent: () =>
      import('./t03-data-type/t03-data-type')
        .then(m => m.T03DataType)
  },
  {
    path:'t04',
    loadComponent: () =>
      import('./t04-events/t04-events')
        .then(m => m.T04Events)
  },
  {
    path:'t05',
    loadComponent: () =>
      import('./t05-get-and-set-values/t05-get-and-set-values')
      .then(m => m.T05GetAndSetValues)
  },
  {
    path:'t06',
    loadComponent:() =>
      import('./t06-if-else/t06-if-else')
      .then(m => m.T06IfElse)
  },
  {
    path:'t07',
    loadComponent:() => 
      import('./t07-else-if/t07-else-if')
      .then(m => m.T07ElseIf)
  },
  {
    path:'t08',
    loadComponent:() =>
      import('./t08-switch-case/t08-switch-case')
      .then(m => m.T08SwitchCase)
  },
  {
    path:'t09',
    loadComponent:()=>
      import('./t09-for-loop/t09-for-loop')
      .then(m => m.T09ForLoop)
  },
  {
    path:'t10',
    loadComponent:()=>
      import('./t10-signals/t10-signals')
      .then(m => m.T10Signals)
  },
  {
    path:'t11',
    loadComponent:()=>
      import('./t11-effects/t11-effects')
      .then(m => m.T11Effects)
  },
  {
    path:'t12',
    loadComponent:()=>
      import('./t12-two-way-binding/t12-two-way-binding')
      .then(m => m.T12TwoWayBinding)
  },
  {
    path: 't13',
    loadComponent: () =>
      import('./t13-directives/t13-directives')
        .then(m => m.T13Directives)
  },
  {
    path: 't14',
    loadComponent: () =>
      import('./t14-routing/t14-routing')
        .then(m => m.T14Routing),
    loadChildren: () =>
      import('./t14-routing/t14-routing.routes')
        .then(m => m.T14_ROUTES)
  },
  {
    path:'t15',
    loadComponent:() =>
      import('./t15-header-with-routing/t15-header-with-routing')
      .then(m => m.T15HeaderWithRouting),
      loadChildren:() =>
        import('./t15-header-with-routing/t15-header-with-routing.routes')
        .then(m => m.T15_HeaderWithRouting)
  },
  {
    path:'t16',
    loadComponent:() => 
      import('./t16-page-404/t16-page-404')
      .then(m => m.T16Page404),
      loadChildren:() =>
        import('./t16-page-404/t16-page-404.routes')
        .then(m => m.T16_PAGE404)
  },

  // ALL TASK/SMALL PROJECTS
  {
    path: 'task01',
    loadComponent: () =>
      import('./task01-counter-app/task01-counter-app')
        .then(m => m.Task01CounterApp)
  },
  {
    path: 'task02',
    loadComponent: () =>
      import('./task02-todo-list/task02-todo-list')
        .then(m => m.Task02TodoList)
  },
];
