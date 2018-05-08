import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerSearchComponent } from './beer-search.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

import { routing } from './beer-search.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
  ],
  declarations: [
    BeerSearchComponent,
    SearchBarComponent,
  ],
})

export class BeerSearchModule {}
