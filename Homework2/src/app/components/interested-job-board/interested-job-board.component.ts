import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-interested-job-board',
  standalone: false,
  templateUrl: './interested-job-board.component.html',
  styleUrls: ['./interested-job-board.component.scss', '../../app.component.scss']
})
export class InterestedJobBoardComponent {
  interestedJobs$!: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.interestedJobs$ = this.dataService.interestedJobs$;
  }

  // Remove a job from the Interested Jobs Board
  removeFromInterested(job: any): void {
    this.dataService.removeInterestedJob(job);
  }
}
