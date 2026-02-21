export type BookStatus = 'Disponível' | 'Emprestado';

export interface Book {
    id?: string,
    title: string,
    image: string,
    author: string,
    status: string,
    category: BookStatus,
}