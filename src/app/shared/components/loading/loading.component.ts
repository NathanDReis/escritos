import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loading',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="loading-grade">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>`,
    styles: `
        .loading-grade {
            width: 80px;
            height: 80px;
            display: inline-block;
            position: relative;
        }

        .loading-grade span {
            width: 18px;
            height: 18px;
            position: absolute;
            background: #5dd6db;
            border-radius:4px; 
            animation: loading-grade 1.2s linear infinite;
        }

        .loading-grade span:nth-child(1) {
            top: 8px;
            left: 8px;
            animation-delay: 0s;
        }

        .loading-grade span:nth-child(2) {
            top: 8px;
            left: 32px;
            animation-delay: -0.4s;
        }

        .loading-grade span:nth-child(3) {
            top: 8px;
            left: 56px;
            animation-delay: -0.8s;
        }

        .loading-grade span:nth-child(4) {
            top: 32px;
            left: 8px;
            animation-delay: -0.4s;
        }

        .loading-grade span:nth-child(5) {
            top: 32px;
            left: 32px;
            animation-delay: -0.8s;
        }

        .loading-grade span:nth-child(6) {
            top: 32px;
            left: 56px;
            animation-delay: -1.2s;
        }

        .loading-grade span:nth-child(7) {
            top: 56px;
            left: 8px;
            animation-delay: -0.8s;
        }

        .loading-grade span:nth-child(8) {
            top: 56px;
            left: 32px;
            animation-delay: -1.2s;
        }

        .loading-grade span:nth-child(9) {
            top: 56px;
            left: 56px;
            animation-delay: -1.6s;
        }

        @keyframes loading-grade {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }`,
})
export class LoadingComponent {}
