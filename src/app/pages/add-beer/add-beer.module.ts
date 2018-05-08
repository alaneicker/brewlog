import { NgModule } from '@angular/core';

import { AddBeerComponent }   from './add-beer.component';
import { routing } from './add-beer.routing';

@NgModule({
  imports: [routing],
  declarations: [AddBeerComponent]
})
export class AdsBeerModule {}
