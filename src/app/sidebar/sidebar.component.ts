import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarData } from './nav-data';
import { EventEmitter } from 'node:stream';

interface SidebarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  title = 'subs-admin';

  @Output() onToggleSidebar: EventEmitter<> = new EventEmitter();
  collapsed = false;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidebar (): void {
    this.collapsed = false;
  }
}
