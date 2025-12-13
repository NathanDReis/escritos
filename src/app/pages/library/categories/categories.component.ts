import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="space-y-8">
      <div class="flex items-center justify-between">
         <div>
            <h2 class="text-3xl font-serif font-bold text-slate-800 tracking-tight">Categorias</h2>
            <p class="text-slate-500 mt-1">Organização temática do acervo.</p>
         </div>
         <div class="flex gap-3">
             <button class="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium text-sm">Gerenciar Tags</button>
             <button class="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md font-medium flex items-center gap-2">
                <span class="text-xl leading-none">+</span> Nova Categoria
             </button>
         </div>
      </div>

      @if (categories$ | async; as categories) {
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           @for (cat of categories; track cat.id) {
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <!-- Decorative background blob -->
                  <div class="absolute -top-10 -right-10 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div class="flex items-start justify-between mb-6 relative">
                      <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                        {{ cat.icon }}
                      </div>
                      <span class="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">{{ cat.count }} livros</span>
                  </div>
                  
                  <div class="relative">
                      <h3 class="font-bold text-lg text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">{{ cat.name }}</h3>
                      <p class="text-sm text-slate-400 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">Clique para ver detalhes</p>
                      
                      <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div class="h-full bg-slate-400 w-2/3 group-hover:bg-blue-600 transition-all duration-500 rounded-full"></div>
                      </div>
                  </div>
              </div>
           }
        </div>
      }
    </div>
  `
})
export class CategoriesComponent {
  private dataService = inject(MockDataService);
  categories$ = this.dataService.getCategories();
}
