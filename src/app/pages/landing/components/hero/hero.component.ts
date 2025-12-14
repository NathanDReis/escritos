import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styles: [`
    :host {
      display: block;
    }

    .image {
      background:
        linear-gradient(
          rgba(0, 0, 0, 0.45),
          rgba(0, 0, 0, 0.45)
        ),
        url("https://images.pexels.com/photos/5243951/pexels-photo-5243951.jpeg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `]
})
export class HeroComponent { }
