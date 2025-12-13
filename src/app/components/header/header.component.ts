import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  menuItems = [
    { label: 'Início', link: '#' },
    { label: 'Sobre', link: '#sobre' },
    { label: 'Categorias', link: '#categorias' },
    { label: 'Contato', link: '#footer' }
  ];

  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
