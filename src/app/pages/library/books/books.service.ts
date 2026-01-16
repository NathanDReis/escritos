import { inject, Injectable } from "@angular/core";
import { collection, Firestore, getDocs } from "@angular/fire/firestore";
import { Book } from "./books.interface";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
  private firestore = inject(Firestore);

  async getAllBooks(): Promise<Book[]> {
    try {
        const booksRef = collection(this.firestore, 'books');
        const snapshot = await getDocs(booksRef);
    
        return snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        })) as Book[];
    } catch (err) {
        console.error("Erro:", err);
        throw err;
    }
  }
}