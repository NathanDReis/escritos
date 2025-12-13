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
    template: `
    <div class="min-h-screen bg-white font-sans text-stone-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-categories></app-categories>
        <app-cta></app-cta>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class LandingComponent { }
