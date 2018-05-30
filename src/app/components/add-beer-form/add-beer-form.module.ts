import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBeerFormComponent } from './add-beer-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddBeerFormComponent],
  exports: [AddBeerFormComponent]
})

export class AddBeerFormModule {}
