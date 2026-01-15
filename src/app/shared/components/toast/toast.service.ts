import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private counter = 0;

  toasts = signal<Toast[]>([]);
  private max = 5;

  show(message: string, type: ToastType = 'info', duration = 3000) {
    const id = ++this.counter;

    this.toasts.update(list => [
      ...list.slice(-this.max + 1),
      { id, message, type, duration }
    ]);

    setTimeout(() => this.remove(id), duration);
  }

  remove(id: number) {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }

  success(msg: string, duration?: number) {
    this.show(msg, 'success', duration);
  }

  error(msg: string, duration?: number) {
    this.show(msg, 'error', duration);
  }

  info(msg: string, duration?: number) {
    this.show(msg, 'info', duration);
  }

  warning(msg: string, duration?: number) {
    this.show(msg, 'warning', duration);
  }
}
