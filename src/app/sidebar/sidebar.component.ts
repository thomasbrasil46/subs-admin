import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  title = 'subs-admin';
  onMenuItemClick(item: any): void {
    // Handle menu item click here
    console.log('Menu item clicked:', item);

  }
}
