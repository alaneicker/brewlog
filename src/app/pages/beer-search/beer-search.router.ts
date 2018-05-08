import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerSearchComponent } from './beer-search.component';

const routes: Routes = [
    { path: '', component: BeerSearchComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
