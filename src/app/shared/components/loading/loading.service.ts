import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    isLoading = signal<boolean>(false);

    get value(): boolean {
        return this.isLoading();
    }

    start(): void {
        this.isLoading.set(true);
    }

    stop(): void {
        this.isLoading.set(false);
    }
}