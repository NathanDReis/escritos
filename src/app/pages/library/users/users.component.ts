import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})
export class UsersComponent {
    private dataService = inject(MockDataService);
    users$ = this.dataService.getUsers();
}
