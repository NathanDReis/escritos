import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styles: ``
})
export class LoginComponent {
    email = '';
    password = '';
    isLoading = signal(false);

    private authService = inject(AuthService);
    private router = inject(Router);

    login() {
        if (!this.email || !this.password) return;

        this.isLoading.set(true);
        this.authService.login(this.email, this.password).subscribe(() => {
            this.isLoading.set(false);
            this.router.navigate(['/biblioteca/dashboard']);
        });
    }
}
