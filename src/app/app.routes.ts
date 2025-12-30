import { Routes } from '@angular/router';

import { T14Routing } from './t14-routing/t14-routing';
import { Home } from './t14-routing/home/home';
import { About } from './t14-routing/about/about';
import { Contact, } from './t14-routing/contact/contact';

export const routes: Routes = [
  {
    path: 't14',
    component: T14Routing,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact }
    ]
  },
 
];
