import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book, Category, Loan, User } from '../../shared/models';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    private categories: Category[] = [
        { id: 1, name: 'Ensinos Bíblicos', icon: '📖', count: 120 },
        { id: 2, name: 'História da Igreja', icon: '🏛️', count: 45 },
        { id: 3, name: 'Manuais Ministeriais', icon: '📜', count: 30 },
        { id: 4, name: 'Infantil', icon: '🧸', count: 80 },
        { id: 5, name: 'Casais e Família', icon: '👨‍👩‍👧‍👦', count: 55 },
        { id: 6, name: 'Saúde e Vida Cristã', icon: '🌿', count: 40 },
    ];

    private books: Book[] = [
        { id: 1, title: 'O Peregrino', author: 'John Bunyan', category: 'Ensinos Bíblicos', status: 'Disponível' },
        { id: 2, title: 'História da Reforma', author: 'Carter Lindberg', category: 'História da Igreja', status: 'Emprestado' },
        { id: 3, title: 'Manual do Diaconato', author: 'Igreja Local', category: 'Manuais Ministeriais', status: 'Disponível' },
        { id: 4, title: 'Bíblia Ilustrada', author: 'Vários', category: 'Infantil', status: 'Disponível' },
        { id: 5, title: 'O Significado do Casamento', author: 'Timothy Keller', category: 'Casais e Família', status: 'Emprestado' },
        { id: 6, title: 'Cristianismo Puro e Simples', author: 'C.S. Lewis', category: 'Ensinos Bíblicos', status: 'Disponível' },
        { id: 7, title: 'A Cruz de Cristo', author: 'John Stott', category: 'Ensinos Bíblicos', status: 'Disponível' },
        { id: 8, title: 'Confissões', author: 'Agostinho', category: 'História da Igreja', status: 'Disponível' },
    ];

    private users: User[] = [
        { id: 1, name: 'João Silva', email: 'joao@email.com', type: 'Administrador', status: 'Ativo' },
        { id: 2, name: 'Maria Souza', email: 'maria@email.com', type: 'Leitor', status: 'Ativo' },
        { id: 3, name: 'Pedro Santos', email: 'pedro@email.com', type: 'Leitor', status: 'Inativo' },
    ];

    private loans: Loan[] = [
        {
            id: 1,
            bookId: 2,
            bookTitle: 'História da Reforma',
            userId: 2,
            userName: 'Maria Souza',
            loanDate: new Date('2023-11-01'),
            returnDate: new Date('2023-11-15'),
            status: 'Atrasado'
        },
        {
            id: 2,
            bookId: 5,
            bookTitle: 'O Significado do Casamento',
            userId: 1,
            userName: 'João Silva',
            loanDate: new Date('2023-12-10'),
            returnDate: new Date('2023-12-24'),
            status: 'Em dia'
        },
    ];

    constructor() { }

    getCategories(): Observable<Category[]> {
        return of(this.categories);
    }

    getBooks(): Observable<Book[]> {
        return of(this.books);
    }

    getUsers(): Observable<User[]> {
        return of(this.users);
    }

    getLoans(): Observable<Loan[]> {
        return of(this.loans);
    }

    getDashboardStats(): Observable<any> {
        return of({
            totalBooks: this.books.length,
            availableBooks: this.books.filter(b => b.status === 'Disponível').length,
            activeLoans: this.loans.filter(l => l.status !== 'Devolvido').length,
            totalUsers: this.users.length
        });
    }
}
