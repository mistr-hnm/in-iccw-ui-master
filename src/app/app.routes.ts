import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, },
  {
    path: 'about',
    loadComponent: () => import(`./features/about/about`)
      .then(mod => mod.About)
  },
  { path: '**', component: NotFound }
];