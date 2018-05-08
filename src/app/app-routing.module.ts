import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'beer-search',
        loadChildren: './pages/beer-search/beer-search.module#BeerSearchModule',
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
        loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
