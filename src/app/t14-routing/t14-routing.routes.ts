import { Routes } from '@angular/router';

export const T14_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact').then(m => m.Contact)
  }
];
