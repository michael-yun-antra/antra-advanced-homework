import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-interested-job-card',
  standalone: false,
  templateUrl: './interested-job-card.component.html',
  styleUrl: './interested-job-card.component.scss'
})
export class InterestedJobCardComponent {
  @Input() job: any;
  constructor(private dataService: DataService) {}


  removeInterestedJob(job: any): void {
    this.dataService.removeInterestedJob(job);
  }
}
