import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './services/app.service';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SummarySectionComponent } from './components/summary-section/summary-section.component';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';
import { RatingComponent } from './components/rating/rating.component';
import { RecommendedBeersComponent } from './components/recommended-beers/recommended-beers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SummarySectionComponent,
    BeerDetailComponent,
    RatingComponent,
    RecommendedBeersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
