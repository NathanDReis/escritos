import { Component } from '@angular/core';

@Component({
    selector: 'app-cta',
    standalone: true,
    templateUrl: './cta.component.html',
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class CtaComponent { }
