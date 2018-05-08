import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';
import { AddBeerComponent } from './pages/add-beer/add-beer.component';
import { BeerSearchComponent } from './pages/beer-search/beer-search.component';

import { BeerDetailResolver } from './pages/beer-detail/beer-detail.resolver';

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
    component: AddBeerComponent,
  },
  {
    path: 'beer-detail/:id',
    component: BeerDetailComponent,
    resolve: {
      beerDetailSummary: BeerDetailResolver,
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BeerDetailResolver],
})
export class AppRoutingModule { }
