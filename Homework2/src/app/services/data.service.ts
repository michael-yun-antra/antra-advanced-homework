import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseApi = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  private detailsApi = 'https://hacker-news.firebaseio.com/v0/item/';
  private interestedJobsSubject = new BehaviorSubject<any[]>([]);
  interestedJobs$ = this.interestedJobsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getIds(): Observable<any> {
    return this.http.get<any>(this.baseApi);
  }

  getJobDetails(id : number): Observable<any> {
    return this.http.get<any>(this.detailsApi + id + '.json');
  }
  

  // Crud operations for interested-job-board
  addInterestedJob(job: any): void {
    const currentJobs = this.interestedJobsSubject.value;
    if (!currentJobs.some(j => j.id === job.id)) {
      this.interestedJobsSubject.next([...currentJobs, job]);
    }
  }
  removeInterestedJob(job: any): void {
    const currentJobs = this.interestedJobsSubject.value;
    const updatedJobs = currentJobs.filter(j => j.id !== job.id);
    this.interestedJobsSubject.next(updatedJobs);
  }
  getInterestedJobs(): Observable<any[]> {
    return this.interestedJobs$
  }
}
