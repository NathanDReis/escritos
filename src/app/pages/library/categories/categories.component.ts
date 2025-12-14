import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  private dataService = inject(MockDataService);
  categories$ = this.dataService.getCategories();
}
