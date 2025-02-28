import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseApi = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  private detailsApi = 'https://hacker-news.firebaseio.com/v0/item/';

  constructor(private http: HttpClient) {}

  getIds(): Observable<any> {
    return this.http.get<any>(this.baseApi);
  }

  getJobDetails(id : number): Observable<any> {
    return this.http.get<any>(this.detailsApi + id + '.json');
  }
  
}
