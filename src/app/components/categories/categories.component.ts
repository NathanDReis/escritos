import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './categories.component.html',
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class CategoriesComponent {
    categories = [
        {
            title: 'Ensinos Bíblicos',
            desc: 'Estudos profundos e comentários expositivos.',
            icon: '📖'
        },
        {
            title: 'História da Igreja',
            desc: 'Biografias e relatos dos heróis da fé.',
            icon: '🏛️'
        },
        {
            title: 'Manuais Ministeriais',
            desc: 'Recursos para líderes, pastores e diáconos.',
            icon: '🤝'
        },
        {
            title: 'Infantil',
            desc: 'Histórias ilustradas e materiais didáticos.',
            icon: '🧸'
        },
        {
            title: 'Casais e Família',
            desc: 'Orientação à luz da palavra para o lar.',
            icon: '👨‍👩‍👧‍👦'
        },
        {
            title: 'Saúde e Vida Cristã',
            desc: 'Devocionais e vida prática no dia a dia.',
            icon: '🌿'
        }
    ];
}
