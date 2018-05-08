import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBeerComponent } from './add-beer.component';
import { routing } from './add-beer.router';

@NgModule({
  imports: [
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddBeerComponent,
  ]
})

export class AdsBeerModule {}
