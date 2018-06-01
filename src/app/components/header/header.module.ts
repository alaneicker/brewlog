import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddBeerFormModule } from '../add-beer-form/add-beer-form.module';
import { HeaderComponent } from './header.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AddBeerFormModule,
    ModalModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [HeaderComponent]
})

export class HeaderModule {}
