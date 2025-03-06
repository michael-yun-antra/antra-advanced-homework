import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-directory',
  standalone: false,
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.scss'
})
export class DirectoryComponent implements OnInit {
  data: any;
  constructor(private dataService : DataServiceService){}

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.dataService.getData().subscribe({
      next: (res) => {
        this.data = res.data
        console.log('Data fetched:', this.data);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }
}
