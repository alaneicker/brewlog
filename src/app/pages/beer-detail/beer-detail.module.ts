import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerDetailResolver } from './beer-detail.resolver';
import { BeerDetailComponent } from './beer-detail.component';
import { SummarySectionComponent } from '../../components/summary-section/summary-section.component';
import { RecommendedBeersComponent } from '../../components/recommended-beers/recommended-beers.component';
import { RatingComponent } from '../../components/rating/rating.component';

import { routing } from './beer-detail.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
  ],
  declarations: [
    BeerDetailComponent,
    SummarySectionComponent,
    RecommendedBeersComponent,
    RatingComponent,
  ],
  providers: [BeerDetailResolver],
})

export class BeerDetailModule {}
