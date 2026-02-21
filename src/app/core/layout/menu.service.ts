import { Injectable, Type } from "@angular/core";
import { DashboardIconComponent } from "../icons/dashboard-icon.component";
import { BooksIconComponent } from "../icons/books-icon.component";
import { CategoriesIconComponent } from "../icons/categories-icon.component";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    items: { title: string, link: string, icon: string, id?: number }[] = [
        { title: 'Dashboard', link: '/biblioteca/dashboard', icon: 'dashboard' },
        { title: 'Livros', link: '/biblioteca/livros', icon: 'books' },
        { title: 'Categorias', link: '/biblioteca/categorias', icon: 'categories' },
    ];

    private readonly icons: Record<string, Type<any>> = {
        dashboard: DashboardIconComponent,
        books: BooksIconComponent,
        categories: CategoriesIconComponent,
    };

    getIcon(name: string): Type<any> | null {
        return this.icons[name] ?? null;
    }
}