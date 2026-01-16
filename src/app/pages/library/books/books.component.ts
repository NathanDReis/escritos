import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { Book } from './books.interface';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { LoadingService } from '../../../shared/components/loading/loading.service';

@Component({
   selector: 'app-books',
   standalone: true,
   imports: [FormsModule],
   templateUrl: './books.component.html',
   styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
   private booksService = inject(BooksService);
   private toast = inject(ToastService);
   private loading = inject(LoadingService);
   books: Book[] = [];

   async ngOnInit(): Promise<void> {
      try {
         this.loading.isLoading.set(true);
         this.books = await this.booksService.getAllBooks();
         console.log(this.books);
      } catch (err) {
         console.error(err);
         this.toast.error("Não foi possível encontrar os livros.");
      } finally {
         this.loading.isLoading.set(false);
      }
   }
}
