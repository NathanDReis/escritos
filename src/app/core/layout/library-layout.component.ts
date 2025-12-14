import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-library-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './library-layout.component.html',
  styleUrl: './library-layout.component.css'
})
export class LibraryLayoutComponent {
  private authService = inject(AuthService);

  // Computed signals would be better but keeping simple
  userName = () => this.authService.currentUser()?.name || 'Visitante';
  userInitials = () => this.userName().slice(0, 2).toUpperCase();

  logout() {
    this.authService.logout();
  }
}
