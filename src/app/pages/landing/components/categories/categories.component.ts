import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6q47 0 91.5 10.5T440-278Zm40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q74 0 126 17t112 52q11 6 16.5 14t5.5 21v418q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-481q15 5 29.5 11t28.5 14q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm140-240v-440l120-40v440l-120 40Zm-340-99Z"/></svg>'
        },
        {
            title: 'História da Igreja',
            desc: 'Biografias e relatos dos heróis da fé.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M80-80v-320l160-71v-129l200-100v-60h-80v-80h80v-80h80v80h80v80h-80v60l200 100v129l160 71v320H520v-160q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v160H80Zm80-80h200v-82q0-51 35-86.5t85-35.5q50 0 85 35.5t35 86.5v82h200v-192l-160-72v-134l-160-82-160 82v134l-160 72v192Zm320-260q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm0 20Z"/></svg>'
        },
        {
            title: 'Manuais Ministeriais',
            desc: 'Recursos para líderes, pastores e diáconos.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z"/></svg>'
        },
        {
            title: 'Infantil',
            desc: 'Histórias ilustradas e materiais didáticos.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M320-680q-17 0-28.5-11.5T280-720q0-17 11.5-28.5T320-760h120v-80q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v80h120q17 0 28.5 11.5T680-720q0 17-11.5 28.5T640-680H320Zm40 600q-33 0-56.5-23.5T280-160v-360q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600-80H360Zm0-80h240v-360q0-17-11.5-28.5T560-560H400q-17 0-28.5 11.5T360-520v40h80q17 0 28.5 11.5T480-440q0 17-11.5 28.5T440-400h-80v80h80q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240h-80v80Zm0 0v-400 400Z"/></svg>'
        },
        {
            title: 'Casais e Família',
            desc: 'Orientação à luz da palavra para o lar.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720ZM680-80v-320q0-40-20.5-72T607-522l35-103q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l102 305H800v240H680ZM500-500q-25 0-42.5-17.5T440-560q0-25 17.5-42.5T500-620q25 0 42.5 17.5T560-560q0 25-17.5 42.5T500-500ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720ZM140-80v-280H80v-240q0-33 23.5-56.5T160-680h120q33 0 56.5 23.5T360-600v240h-60v280H140Zm300 0v-160h-40v-160q0-25 17.5-42.5T460-460h80q25 0 42.5 17.5T600-400v160h-40v160H440Z"/></svg>'
        },
        {
            title: 'Saúde e Vida Cristã',
            desc: 'Devocionais e vida prática no dia a dia.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-340q63 0 112-39t63-101h-83q-12 27-37 43.5T480-420q-30 0-55-16.5T388-480h-83q14 62 63 101t112 39ZM370-540q21 0 35.5-14.5T420-590q0-21-14.5-35.5T370-640q-21 0-35.5 14.5T320-590q0 21 14.5 35.5T370-540Zm220 0q21 0 35.5-14.5T640-590q0-21-14.5-35.5T590-640q-21 0-35.5 14.5T540-590q0 21 14.5 35.5T590-540ZM480-120l-58-50q-101-88-167-152T150-437q-39-51-54.5-94T80-620q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 89T810-437q-39 51-105 115T538-170l-58 50Zm0-108q96-83 158-141t98-102.5q36-44.5 50-79t14-69.5q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100q0 35 14 69.5t50 79Q260-427 322-369t158 141Zm0-266Z"/></svg>'
        }
    ];

    constructor(private sanitizer: DomSanitizer) {}

    getSafeSvg(icon: string) {
        return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
}
