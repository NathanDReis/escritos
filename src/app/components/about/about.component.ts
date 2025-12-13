import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class AboutComponent { }
