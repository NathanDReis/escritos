import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about.component';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        HeaderComponent,
        HeroComponent,
        AboutComponent,
        CategoriesComponent,
        CtaComponent,
        FooterComponent
    ],
    templateUrl: './lading.component.html',
    styles: ``
})
export class LandingComponent { }
