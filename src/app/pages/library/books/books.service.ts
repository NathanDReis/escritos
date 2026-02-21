import { inject, Injectable } from "@angular/core";
import { Book } from "./books.interface";
import { MockDataService } from "../../../core/services/mock-data.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
  private mockDataService = inject(MockDataService);

  getAllBooks(): Observable<Book[]> {
    return this.mockDataService.getBooks();
  }
}