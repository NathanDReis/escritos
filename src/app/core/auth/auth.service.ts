import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, User, user, UserCredential } from '@angular/fire/auth';
import { Observable, Subscription, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { mapFirebaseAuthError } from './firebase-auth-error.mapper';

@Injectable({ 
    providedIn: 'root' 
})
export class AuthService {

  private auth = inject(Auth);
  private router = inject(Router);

  isAuthenticated = signal<boolean>(false);
  firebaseUser = signal<User | null>(null);
  currentUser = signal<{ uid: string; email: string | null, name: string | null } | null>(null);
  authInitialized = signal<boolean>(false);

  constructor() {
    user(this.auth).subscribe(firebaseUser => {
      this.authInitialized.set(true);

      if (!firebaseUser) {
        this.isAuthenticated.set(false);
        this.firebaseUser.set(null);
        this.currentUser.set(null);
        return;
      }

      this.isAuthenticated.set(true);
      this.firebaseUser.set(firebaseUser);
      this.currentUser.set({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName
      });
    });
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(err => throwError(() => mapFirebaseAuthError(err)))
    );
  }

  logout(): Subscription {
    return from(signOut(this.auth)).pipe(
      catchError(err => throwError(() => mapFirebaseAuthError(err)))
    ).subscribe({
      complete: () => {
        this.router.navigate(['/login']);
      }
    });;
  }

  async changePassword(): Promise<void> {
    if (!this.currentUser()?.email) return;

    await sendPasswordResetEmail(this.auth, this.currentUser()!.email!, {
      url: 'https://escritos.nathanreis.com.br',
      handleCodeInApp: false
    });
  }
}
