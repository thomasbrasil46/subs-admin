import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  title = 'subs-admin';

  collapsed = false;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar (): void {
    this.collapsed = false;
  }
}
