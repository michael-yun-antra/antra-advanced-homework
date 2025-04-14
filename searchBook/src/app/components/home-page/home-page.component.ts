import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  inputField = new FormControl();
  books !: Observable<any>;
  wishlist: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.books = this.inputField.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) =>
        this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      )
    );
  }

  addToWishlist(bookTitle: string): void {
    if (!this.wishlist.includes(bookTitle)) {
      this.wishlist.push(bookTitle);
    }
  }

  deleteFromWishlist(bookTitle: string): void {
    this.wishlist = this.wishlist.filter(entry => entry != bookTitle)
  }
}
