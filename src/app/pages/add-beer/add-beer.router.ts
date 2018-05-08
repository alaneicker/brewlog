import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBeerComponent }   from './add-beer.component';

const routes: Routes = [
    { path: '', component: AddBeerComponent }
];
