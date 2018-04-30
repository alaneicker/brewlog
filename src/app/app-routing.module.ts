import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';

import { BeerDetailResolver } from './pages/beer-detail/beer-detail.resolver';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'beer-detail/:id', component: BeerDetailComponent, resolve: { beerData: BeerDetailResolver } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BeerDetailResolver],
})
export class AppRoutingModule { }
