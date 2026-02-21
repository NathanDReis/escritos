import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';
import { AuthService } from '../../../core/auth/auth.service';
import { ReaderRanking } from '../../../shared/models';

@Component({
   selector: 'app-dashboard',
   standalone: true,
   imports: [AsyncPipe],
   templateUrl: './dashboard.component.html',
   styles: ``
})
export class DashboardComponent {
   private dataService = inject(MockDataService);
   private authService = inject(AuthService);

   stats$ = this.dataService.getDashboardStats();
   ranking$ = this.dataService.getReaderRanking();

   showAllRanking = signal(false);
   currentUserEmail = this.authService.currentUser()?.email ?? null;

   toggleRanking() {
      this.showAllRanking.update(v => !v);
   }

   getInitials(name: string): string {
      return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
   }

   isCurrentUser(reader: ReaderRanking): boolean {
      return reader.email === this.currentUserEmail;
   }

   getPodiumOrder(top3: ReaderRanking[]): ReaderRanking[] {
      // Reordena para exibição visual: 2º, 1º, 3º (estilo pódio)
      if (top3.length < 3) return top3;
      return [top3[1], top3[0], top3[2]];
   }
}
