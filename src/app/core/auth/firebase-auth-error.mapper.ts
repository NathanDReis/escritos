import { FIREBASE_AUTH_ERRORS } from './firebase-auth-errors';

export function mapFirebaseAuthError(error: any): string {
  const code = error?.code;

  if (!code) {
    return 'Ocorreu um erro inesperado. Tente novamente.';
  }

  return (
    FIREBASE_AUTH_ERRORS[code] ||
    'Não foi possível realizar o login. Tente novamente.'
  );
}
