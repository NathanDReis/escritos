import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'app-books',
   standalone: true,
   imports: [AsyncPipe, FormsModule],
   templateUrl: './books.component.html',
   styles: ``
})
export class BooksComponent {
   private dataService = inject(MockDataService);
   books$ = this.dataService.getBooks();
}
