import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerDetailResolver } from './beer-detail.resolver';
import { BeerDetailComponent } from './beer-detail.component';

const routes: Routes = [
    {
        path: '',
        component: BeerDetailComponent,
        resolve: {
            beerDetailSummary: BeerDetailResolver,
        },
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
