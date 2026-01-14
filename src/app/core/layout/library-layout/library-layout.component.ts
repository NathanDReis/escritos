import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MenuService } from '../menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './library-layout.component.html',
  styles: ``
})
export class LibraryLayoutComponent {
  private authService = inject(AuthService);
  readonly menuService = inject(MenuService);

  userName = () => this.authService.currentUser()?.name || 'Usuário';
  userPhotoUrl = () => this.authService.currentUser()?.photoURL;
  userInitials = () => this.userName().slice(0, 2).toUpperCase();

  isMobileSidebarOpen = false;

  toggleMobileSidebar() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  closeMobileSidebar() {
    this.isMobileSidebarOpen = false;
  }

  logout() {
    this.authService.logout();
  }
}
