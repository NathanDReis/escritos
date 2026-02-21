import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { finalize } from 'rxjs';
import { LoadingService } from '../../shared/components/loading/loading.service';
import { ToastService } from '../../shared/components/toast/toast.service';

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
    private loading = inject(LoadingService);
    private toast = inject(ToastService);

    login(): void {
        if (!this.email || !this.password) {
            this.toast.error('Não foi possível ler seu e-mail e senha.');
            return;
        };

        this.loading.start();
        this.authService.login(this.email, this.password)
        .pipe(finalize(() => this.loading.stop()))
        .subscribe({
            next: () => {
                this.router.navigate(['/biblioteca/dashboard']);
            },
            error: (err) => {
                this.toast.error(err)
            }
        });
    }

    get canIsLogin(): boolean {
        return !!this.email.trim().length && !!this.password.trim().length;
    }
}
