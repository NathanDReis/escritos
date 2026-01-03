import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { LibraryLayoutComponent } from './core/layout/library-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './pages/library/dashboard/dashboard.component';
import { BooksComponent } from './pages/library/books/books.component';
import { CategoriesComponent } from './pages/library/categories/categories.component';
import { LoansComponent } from './pages/library/loans/loans.component';
import { UsersComponent } from './pages/library/users/users.component';
import { loginAuthGuard } from './core/guards/login.auth.guard';

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
            { path: 'usuarios', component: UsersComponent },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
