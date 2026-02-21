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