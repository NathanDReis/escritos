import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingService } from './shared/components/loading/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollToTopComponent, LoadingComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loadingService = inject(LoadingService);
}
