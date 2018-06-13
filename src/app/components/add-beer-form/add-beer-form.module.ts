import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2ImgMaxModule } from 'ng2-img-max';

import { AddBeerFormComponent } from './add-beer-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2ImgMaxModule,
  ],
  declarations: [AddBeerFormComponent],
  exports: [AddBeerFormComponent]
})

export class AddBeerFormModule {}
