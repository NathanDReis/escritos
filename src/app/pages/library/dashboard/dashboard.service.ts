import { inject, Injectable } from "@angular/core";
import { MockDataService } from "../../../core/services/mock-data.service";
import { Observable } from "rxjs";
import { ReaderRanking, Stats } from "./dashboard.interface";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
  private dataService = inject(MockDataService);

  getStats(): Observable<Stats> {
    return this.dataService.getDashboardStats();
  }

  getRanking(): Observable<ReaderRanking[]> {
    return this.dataService.getReaderRanking();
  }
}