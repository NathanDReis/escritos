import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  menuItems = [
    { label: 'Sobre', link: '#sobre' },
    { label: 'Categorias', link: '#categorias' },
    { label: 'Contato', link: '#footer' },
    { label: 'EGW', link: 'https://m.egwwritings.org/pt', external: true }
  ];

  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
