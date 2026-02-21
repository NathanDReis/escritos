import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Stats, ReaderRanking } from './dashboard.interface';
import { firstValueFrom } from 'rxjs';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { LoadingService } from '../../../shared/components/loading/loading.service';
import { DashboardService } from './dashboard.service';

@Component({
   selector: 'app-dashboard',
   standalone: true,
   imports: [],
   templateUrl: './dashboard.component.html',
   styles: ``
})
export class DashboardComponent implements OnInit {
   private dashboardService = inject(DashboardService);
   private authService = inject(AuthService);
   private toast = inject(ToastService);
   private loading = inject(LoadingService);

   showAllRanking = signal(false);
   currentUserEmail = this.authService.currentUser()?.email ?? null;
   
   stats: Stats | null = null;
   ranking: ReaderRanking[] | null = null;

   async ngOnInit(): Promise<void> {
      try {
         this.loading.start();
         const [stats, ranking] = await Promise.all([
            this.getDashboardStats(),
            this.getReaderRanking()
         ]);
         this.stats = stats;
         this.ranking = ranking;
      } catch (err) {
         this.toast.error("Não foi possível carregar os dados no momento.");
      } finally {
         this.loading.stop();
      }
   }

   async getDashboardStats(): Promise<Stats> {
      return firstValueFrom(this.dashboardService.getStats());
   }

   async getReaderRanking(): Promise<ReaderRanking[]> {
      return firstValueFrom(this.dashboardService.getRanking());
   }

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
      if (top3.length < 3) return top3;
      return [top3[1], top3[0], top3[2]];
   }
}
