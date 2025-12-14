import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './categories.component.html',
  styles: ``
})
export class CategoriesComponent {
  private dataService = inject(MockDataService);
  categories$ = this.dataService.getCategories();

  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
