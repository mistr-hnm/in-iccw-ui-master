import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'inventory',
    loadComponent: () => import(`./features/inventory/inventory`)    // TODO: use loadChildren for lazy loading
      .then(mod => mod.Inventory)
  },
  {
    path: 'about',
    loadComponent: () => import(`./features/about/about`)
      .then(mod => mod.About)
  },
  { path: '**', component: NotFound }
];