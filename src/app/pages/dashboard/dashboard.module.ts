import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { RatingComponent } from '../../components/rating/rating.component';

import { routing } from './dashboard.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
    RatingComponent,
  ],
  providers: [],
})

export class DashboardModule {}
