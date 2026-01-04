import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-egw-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './egw-layout.component.html',
  styles: ``,
})
export class EgwLayoutComponent implements OnInit {
  private authService = inject(AuthService);

  // Computed signals would be better but keeping simple
  userName = () => this.authService.currentUser()?.email || 'Visitante';
  userInitials = () => this.userName().slice(0, 2).toUpperCase();

  isMobileSidebarOpen = true;

  toggleMobileSidebar() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  closeMobileSidebar() {
    this.isMobileSidebarOpen = false;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.closeMobileSidebar();
  }
}
