import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-job-card',
  standalone: false,
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent implements OnInit {
  @Input() job: any;
  dateString : string = "";

  constructor(private dataService: DataService) {}

  addInterestedJob(job: any): void {
    this.dataService.addInterestedJob(job);
  }

  convertEpochToDate(epoch: number): string {
    let str = new Date(epoch*1000).toLocaleString("en-US");
    return str
  }

  setJobDetails(job: any) {
    this.job = job;
  }

  ngOnInit(): void {
    this.dateString = this.convertEpochToDate(this.job?.time)
  }
}
