import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { switchMap } from 'rxjs/operators';
import { of, forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ids: number[] = [];
  jobDetails: any[] = [];
  currentPage = 0;

  constructor(private dataService: DataService) {}

  check() {
    console.log(this.jobDetails);
  }

  updateJobs(page: number = this.currentPage + 1): void {
    this.currentPage = page;
    
    const sixIds = this.ids.slice(page * 6, (page + 1) * 6);
    if (!sixIds.length) return;

    forkJoin(sixIds.map(id => this.dataService.getJobDetails(id))).subscribe({
      next: (res) => this.jobDetails = [...res],
      error: (err) => console.error("Error loading jobs:", err)
    });
  }

  hasMoreJobs(): boolean {
    return this.currentPage * 6 < this.ids.length - 1;
  }

  ngOnInit(): void {
    this.dataService.getIds().pipe(
      switchMap((ids: number[]) => {
        this.ids = ids;
        return this.ids.length ? forkJoin(this.ids.slice(0, 6).map(id => this.dataService.getJobDetails(id))) : of([]);
      })
    ).subscribe({
      next: (res) => this.jobDetails = res
    });
  }
}
