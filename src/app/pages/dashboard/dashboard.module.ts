import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { RatingModule } from '../../components/rating/rating.module';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HeroComponent } from '../../components/hero/hero.component';

import { FilterPipe } from '../../pipes/filter.pipe';

import { routing } from './dashboard.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    RatingModule,
  ],
  declarations: [
    DashboardComponent,
    BeerCardComponent,
    SearchBarComponent,
    HeroComponent,
    FilterPipe,
  ],
})

export class DashboardModule {}
