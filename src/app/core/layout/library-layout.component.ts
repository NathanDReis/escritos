import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-library-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-slate-50 font-sans text-slate-800">
      
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-slate-200 flex flex-col z-20">
        <div class="p-8 pb-4">
          <div class="flex items-center gap-2 mb-1">
             <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">E</div>
             <h1 class="text-2xl font-serif font-bold text-slate-800 tracking-tight">Escritos</h1>
          </div>
          <p class="text-xs text-slate-400 font-medium pl-10 uppercase tracking-widest">Biblioteca</p>
        </div>

        <nav class="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <a routerLink="dashboard" routerLinkActive="bg-blue-50 text-blue-700" 
             class="flex items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-all duration-200 group">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">📊</span>
            <span class="font-medium text-sm">Dashboard</span>
          </a>

          <a routerLink="livros" routerLinkActive="bg-blue-50 text-blue-700" 
             class="flex items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-all duration-200 group">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">📚</span>
            <span class="font-medium text-sm">Livros</span>
          </a>

          <a routerLink="categorias" routerLinkActive="bg-blue-50 text-blue-700" 
             class="flex items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-all duration-200 group">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">🏷️</span>
            <span class="font-medium text-sm">Categorias</span>
          </a>

          <a routerLink="emprestimos" routerLinkActive="bg-blue-50 text-blue-700" 
             class="flex items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-all duration-200 group">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">📅</span>
            <span class="font-medium text-sm">Empréstimos</span>
          </a>

          <a routerLink="usuarios" routerLinkActive="bg-blue-50 text-blue-700" 
             class="flex items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-all duration-200 group">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">👥</span>
            <span class="font-medium text-sm">Usuários</span>
          </a>
        </nav>

        <div class="p-4 border-t border-slate-100">
          <button (click)="logout()" class="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
            <span class="mr-3">🚪</span>
            Sair
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto flex flex-col relative">
        <!-- Top Header -->
        <header class="bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10 w-full transition-all">
           <!-- Breadcrumb-like placeholder -->
           <div class="flex items-center text-sm font-medium text-slate-400">
             <span class="text-slate-800">Biblioteca</span>
             <span class="mx-2">/</span>
             <span class="text-blue-600">Visão Geral</span>
           </div>

           <div class="flex items-center gap-4">
              <button class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
                🔔
              </button>
              
              <div class="h-8 w-px bg-slate-200 mx-1"></div>

              <div class="flex items-center gap-3 pl-2">
                 <div class="text-right hidden sm:block">
                    <div class="text-sm font-semibold text-slate-700 leading-tight">{{ userName() }}</div>
                    <div class="text-xs text-slate-400">Admin</div>
                 </div>
                 <div class="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-700 font-bold text-xs shadow-sm">
                   {{ userInitials() }}
                 </div>
              </div>
           </div>
        </header>

        <div class="p-8 max-w-7xl mx-auto w-full">
           <router-outlet></router-outlet>
        </div>
      </main>

    </div>
  `
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
