import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [AsyncPipe],
    template: `
    <div class="space-y-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
            <h2 class="text-3xl font-serif font-bold text-slate-800 tracking-tight">Usuários</h2>
            <p class="text-slate-500 mt-1">Leitores e administradores do sistema.</p>
         </div>
         <button class="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition-all shadow-md font-medium flex items-center gap-2">
            <span class="text-xl leading-none">+</span> Novo Usuário
         </button>
      </div>

       @if (users$ | async; as users) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @for (user of users; track user.id) {
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col relative overflow-hidden">
                    <!-- Background accent -->
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div class="flex items-start justify-between mb-4">
                         <div class="w-14 h-14 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center text-xl font-bold border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                            {{ user.name.charAt(0) }}
                         </div>
                         <div class="flex flex-col items-end gap-1">
                             <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-slate-200 text-slate-500 bg-white">
                                 {{ user.type }}
                             </span>
                             <span class="w-2 h-2 rounded-full"
                                   [class.bg-emerald-500]="user.status === 'Ativo'"
                                   [class.bg-rose-500]="user.status === 'Inativo'"></span>
                         </div>
                    </div>
                    
                    <div class="flex-1">
                        <h3 class="font-bold text-slate-800 text-lg leading-tight mb-1 group-hover:text-blue-700 transition-colors">{{ user.name }}</h3>
                        <p class="text-sm text-slate-400 font-medium">{{ user.email }}</p>
                    </div>

                    <div class="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-slate-400 text-sm">
                        <span>Desde 2024</span>
                        <button class="text-slate-400 hover:text-slate-800 transition-colors font-medium">Ver perfil</button>
                    </div>
                </div>
            }
        </div>
       }
    </div>
  `
})
export class UsersComponent {
    private dataService = inject(MockDataService);
    users$ = this.dataService.getUsers();
}
