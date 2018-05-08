import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerDetailResolver } from './beer-detail.resolver';
import { BeerDetailComponent } from './beer-detail.component';
import { SummarySectionComponent } from '../../components/summary-section/summary-section.component';
import { RecommendedBeersComponent } from '../../components/recommended-beers/recommended-beers.component';

import { RatingModule } from '../../components/rating/rating.module';

import { routing } from './beer-detail.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
    RatingModule,
  ],
  declarations: [
    BeerDetailComponent,
    SummarySectionComponent,
    RecommendedBeersComponent,
  ],
  providers: [BeerDetailResolver],
})

export class BeerDetailModule {}
