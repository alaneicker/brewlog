import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddBeerFormModule } from '../add-beer-form/add-beer-form.module';
import { HeaderComponent } from './header.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    AddBeerFormModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
  ],
  exports: [HeaderComponent]
})

export class HeaderModule {}
