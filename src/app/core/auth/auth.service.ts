import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut, user, UserCredential } from '@angular/fire/auth';
import { Observable, from, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { mapFirebaseAuthError } from './firebase-auth-error.mapper';

@Injectable({ 
    providedIn: 'root' 
})
export class AuthService {

  private auth = inject(Auth);
  private router = inject(Router);

  // Signals
  isAuthenticated = signal<boolean>(false);
  currentUser = signal<{ uid: string; email: string | null } | null>(null);

  constructor() {
    user(this.auth).subscribe(firebaseUser => {
        if (!firebaseUser) {
            this.isAuthenticated.set(false);
            this.currentUser.set(null);
            return;
        }

        this.isAuthenticated.set(true);
        this.currentUser.set({
            uid: firebaseUser.uid,
            email: firebaseUser.email
        });
    });
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
        catchError(err => throwError(() => mapFirebaseAuthError(err)))
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      tap(() => {
        this.router.navigate(['/login']);
      })
    );
  }
}
