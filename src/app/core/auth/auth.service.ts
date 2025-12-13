import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, delay, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Signal to track auth state
    isAuthenticated = signal<boolean>(false);

    // Mock user info
    currentUser = signal<{ name: string, email: string } | null>(null);

    constructor(private router: Router) {
        // Check localStorage on init implementation could go here
        const storedAuth = localStorage.getItem('escritos_auth');
        if (storedAuth === 'true') {
            this.isAuthenticated.set(true);
            this.currentUser.set({ name: 'Usuário Mock', email: 'admin@escritos.com' });
        }
    }

    login(email: string, password: string): Observable<boolean> {
        // Mock login delay
        return of(true).pipe(
            delay(800),
            tap(() => {
                this.isAuthenticated.set(true);
                this.currentUser.set({ name: 'Usuário Mock', email });
                localStorage.setItem('escritos_auth', 'true');
            })
        );
    }

    logout(): void {
        this.isAuthenticated.set(false);
        this.currentUser.set(null);
        localStorage.removeItem('escritos_auth');
        this.router.navigate(['/login']);
    }
}
