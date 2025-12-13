import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  template: `
    <div class="space-y-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
           <h2 class="text-3xl font-serif font-bold text-slate-800 tracking-tight">Acervo de Livros</h2>
           <p class="text-slate-500 mt-1">Gerencie e organize todo o catálogo da biblioteca.</p>
         </div>
         <button class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-medium flex items-center gap-2">
            <span class="text-xl leading-none">+</span> Novo Livro
         </button>
      </div>

      <!-- Search & Filters Bar -->
      <div class="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex items-center">
          <div class="relative flex-1">
             <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
             <input type="text" placeholder="Buscar por título, autor ou ISBN..." 
                    class="w-full pl-12 pr-4 py-3 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 outline-none">
          </div>
          <div class="h-8 w-px bg-slate-100 mx-2"></div>
          <button class="px-6 py-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium text-sm">
             Filtros
          </button>
      </div>

      <!-- Books Grid -->
      @if (books$ | async; as books) {
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
           @for (book of books; track book.id) {
              <div class="bg-white rounded-2xl p-4 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group border border-slate-100/50 hover:border-slate-200 cursor-pointer flex flex-col h-full">
                  <!-- Cover / Placeholder -->
                  <div class="aspect-2/3 bg-slate-50 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-100 transition-colors">
                      <span class="text-5xl opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-500">📖</span>
                      
                      <!-- Status Badge (Floating) -->
                      <div class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm"
                           [class.bg-emerald-100]="book.status === 'Disponível'"
                           [class.text-emerald-700]="book.status === 'Disponível'"
                           [class.bg-amber-100]="book.status === 'Emprestado'"
                           [class.text-amber-700]="book.status === 'Emprestado'">
                          {{ book.status }}
                      </div>
                  </div>
                  
                  <div class="flex-1 flex flex-col">
                      <div class="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide opacity-80">{{ book.category }}</div>
                      <h3 class="font-serif font-bold text-slate-800 text-lg mb-1 leading-snug group-hover:text-blue-700 transition-colors">{{ book.title }}</h3>
                      <p class="text-sm text-slate-500 mb-4">{{ book.author }}</p>
                      
                      <div class="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-slate-400">
                          <span class="text-xs font-medium">#{{ book.id }}</span>
                          <button class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                             ⋮
                          </button>
                      </div>
                  </div>
              </div>
           }
        </div>
      }
    </div>
  `
})
export class BooksComponent {
  private dataService = inject(MockDataService);
  books$ = this.dataService.getBooks();
}
