import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { SummarySectionModule } from '../../components/summary-section/summary-section.module';

import { DataStorageService } from '../../services/data-storage.service';

import { BeerDetailResolver } from './beer-detail.resolver';
import { BeerDetailComponent } from './beer-detail.component';
import { RecommendedBeersComponent } from '../../components/recommended-beers/recommended-beers.component';
import { BreweryLocationMapsComponent } from '../../components/brewery-locations-map/brewery-locations-map.component';
import { UntappdCheckinsComponent } from '../../components/untappd-checkins/untappd-checkins.component';

import { routing } from './beer-detail.router';

@NgModule({
    imports: [
        routing,
        CommonModule,
        SummarySectionModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAet8Mk1nPvOn_AebLE5ZxXoGejOD8tPzA'
        })
    ],
    declarations: [
        BeerDetailComponent,
        RecommendedBeersComponent,
        BreweryLocationMapsComponent,
        UntappdCheckinsComponent,
    ],
    providers: [
        BeerDetailResolver,
        DataStorageService,
    ],
})

export class BeerDetailModule {}
