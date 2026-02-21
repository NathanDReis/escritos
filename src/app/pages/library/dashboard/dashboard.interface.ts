export interface Stats {
    totalBooks: number;
    availableBooks: number;
    activeLoans: number;
    totalUsers: number;
}

export interface ReaderRanking {
  position: number;
  userId: number;
  name: string;
  email: string;
  totalLoans: number;
  avatarColor: string;
}
