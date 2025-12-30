import { Routes } from '@angular/router';

import { T14Routing } from './t14-routing';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const t14Routes: Routes = [
  {
    path: 't14',
    component: T14Routing,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact }
    ]
  }
];
