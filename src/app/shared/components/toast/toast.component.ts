import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastType } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
        @for (toast of toastService.toasts(); track toast.id) {
            <div
                class="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-sm text-white cursor-pointer
                    transition-all duration-200 ease-out
                    animate-[toast-in_0.2s_ease-out]"
                [ngClass]="classes(toast.type)"
                (click)="toastService.remove(toast.id)"
            >
                <span class="font-medium">
                {{ toast.message }}
                </span>
          </div>
        }
    </div>
  `
})
export class ToastComponent {
  toastService = inject(ToastService);

  classes(type: ToastType) {
    return {
      success: 'bg-[#08A045]',
      error: 'bg-[#FF1B1C]',
      info: 'bg-[#4D9DE0]',
      warning: 'bg-[#FF7F11]'
    }[type];
  }
}
