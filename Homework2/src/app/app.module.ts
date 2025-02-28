import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { JobCardComponent } from './components/job-card/job-card.component';
import { InterestedJobBoardComponent } from './components/interested-job-board/interested-job-board.component';
import { InterestedJobCardComponent } from './components/interested-job-board/interested-job-card/interested-job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    InterestedJobBoardComponent,
    InterestedJobCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
