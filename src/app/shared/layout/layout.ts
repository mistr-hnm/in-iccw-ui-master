import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    SHARED_IMPORTS
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  protected readonly title = signal('in-iccw-ui-master');
  
  isExpanded = false;

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

}
