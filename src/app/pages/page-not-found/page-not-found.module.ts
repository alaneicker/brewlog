import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';

import { routing } from './page-not-found.router';

@NgModule({
  imports: [
    routing,
    CommonModule,
  ],
  declarations: [
    PageNotFoundComponent,
  ],
})

export class PageNotFoundModule {}
