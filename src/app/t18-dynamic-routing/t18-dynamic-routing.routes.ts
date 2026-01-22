import { Routes } from '@angular/router';

export const T18_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./t18-dynamic-routing')
        .then(m => m.T18DynamicRouting)
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./users/users')
        .then(m => m.Users)
  }
];
