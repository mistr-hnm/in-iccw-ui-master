import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { SHARED_IMPORTS } from './shared/shared';
import { Layout } from './shared/layout/layout'; 

@Component({
  selector: 'app-root',
  imports: [
    SHARED_IMPORTS,
    CommonModule,  
    Layout,
  ],
  templateUrl: './app.html',
})
export class App {

  protected readonly footerLink = signal('google');
  protected readonly footerUrl = signal('www.google.com');
}
