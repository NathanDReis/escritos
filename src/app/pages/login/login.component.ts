import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { finalize } from 'rxjs';
import { LoadingService } from '../../shared/components/loading/loading.service';

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

    private authService = inject(AuthService);
    private router = inject(Router);
    loadingService = inject(LoadingService);

    login(): void {
        if (!this.email || !this.password) {
            console.error('Não foi possível ler seu e-mail e senha.');
            return;
        };

        this.loadingService.isLoading.set(true);
        this.authService.login(this.email, this.password)
        .pipe(finalize(() => this.loadingService.isLoading.set(false)))
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
