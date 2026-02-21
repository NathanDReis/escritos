import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingService } from './shared/components/loading/loading.service';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ScrollToTopComponent, 
    LoadingComponent, 
    CommonModule,
    ToastComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loading = inject(LoadingService);
}
