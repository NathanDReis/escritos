import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
    selector: 'app-loans',
    standalone: true,
    imports: [AsyncPipe, DatePipe],
    templateUrl: './loans.component.html',
    styles: ``
})
export class LoansComponent {
    private dataService = inject(MockDataService);
    loans$ = this.dataService.getLoans();
}
