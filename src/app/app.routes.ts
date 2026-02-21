import { Routes } from '@angular/router';
import { LibraryLayoutComponent } from './core/layout/library-layout/library-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './pages/library/dashboard/dashboard.component';
import { BooksComponent } from './pages/library/books/books.component';
import { CategoriesComponent } from './pages/library/categories/categories.component';
import { LoansComponent } from './pages/library/loans/loans.component';
import { loginAuthGuard } from './core/guards/login.auth.guard';
import { ProfileComponent } from './pages/library/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [loginAuthGuard]
    },
    {
        path: 'biblioteca',
        component: LibraryLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'livros', component: BooksComponent },
            { path: 'categorias', component: CategoriesComponent },
            { path: 'emprestimos', component: LoansComponent },
            { path: 'perfil', component: ProfileComponent },
            {
                path: '**',
                redirectTo: '/biblioteca/dashboard'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
