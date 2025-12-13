import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeroComponent { }
