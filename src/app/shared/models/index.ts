export type UserType = 'Leitor' | 'Administrador';
export type UserStatus = 'Ativo' | 'Inativo';

export interface User {
  id: number;
  name: string;
  email: string;
  type: UserType;
  status: UserStatus;
}