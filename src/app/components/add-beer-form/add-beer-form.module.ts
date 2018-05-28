import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBeerFormComponent } from './add-beer-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
