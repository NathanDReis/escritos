import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './login.component.html',
    styles: ``
})
export class LoginComponent {
    email = '';
    password = '';
    isLoading = signal(false);

    private authService = inject(AuthService);
    private router = inject(Router);

    login(): void {
        if (!this.email || !this.password) {
            console.error('Não foi possível ler seu e-mail e senha.');
            return;
        };

        this.isLoading.set(true);
        this.authService.login(this.email, this.password)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
            next: () => {
                this.router.navigate(['/biblioteca/dashboard']);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

    get canIsLogin(): boolean {
        return !!this.email.trim().length && !!this.password.trim().length;
    }
}
