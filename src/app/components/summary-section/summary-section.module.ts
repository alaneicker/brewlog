import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingModule } from '../../components/rating/rating.module';
import { AddBeerFormModule } from '../../components/add-beer-form/add-beer-form.module';
import { ModalModule } from '../../components/modal/modal.module';

import { SummarySectionComponent } from './summary-section.component';

@NgModule({
  imports: [
    CommonModule,
    AddBeerFormModule,
    RatingModule,
    ModalModule,
  ],
  declarations: [SummarySectionComponent],
  exports: [SummarySectionComponent]
})

export class SummarySectionModule {}
