export type BookStatus = 'Disponível' | 'Emprestado';

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  status: BookStatus;
  cover?: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string; // emoji or svg path
  count: number;
}

export type UserType = 'Leitor' | 'Administrador';
export type UserStatus = 'Ativo' | 'Inativo';

export interface User {
  id: number;
  name: string;
  email: string;
  type: UserType;
  status: UserStatus;
}

export type LoanStatus = 'Em dia' | 'Atrasado' | 'Devolvido';

export interface Loan {
  id: number;
  bookId: number;
  bookTitle: string;
  userId: number;
  userName: string;
  loanDate: Date;
  returnDate: Date;
  status: LoanStatus;
}

export interface ReaderRanking {
  position: number;
  userId: number;
  name: string;
  email: string;
  totalLoans: number;
  avatarColor: string;
}
