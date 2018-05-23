import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { RatingModule } from '../../components/rating/rating.module';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

import { routing } from './dashboard.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
    RatingModule,
  ],
  declarations: [
    DashboardComponent,
    BeerCardComponent,
    SearchBarComponent,
  ],
})

export class DashboardModule {}
