import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
   selector: 'app-dashboard',
   standalone: true,
   imports: [AsyncPipe],
   templateUrl: './dashboard.component.html',
   styles: ``
})
export class DashboardComponent {
   private dataService = inject(MockDataService);
   stats$ = this.dataService.getDashboardStats();
}
