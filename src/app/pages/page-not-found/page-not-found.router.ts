import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    { path: '', component: PageNotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
