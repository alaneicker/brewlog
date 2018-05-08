import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BeerSearchComponent } from './pages/beer-search/beer-search.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'beer-search',
    component: BeerSearchComponent,
  },
  {
    path: 'add-beer',
    loadChildren: './pages/add-beer/add-beer.module#AdsBeerModule',
  },
  {
    path: 'beer-detail/:id',
    loadChildren: './pages/beer-detail/beer-detail.module#BeerDetailModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
