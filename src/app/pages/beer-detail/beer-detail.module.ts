import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingModule } from '../../components/rating/rating.module';

import { BeerDetailResolver } from './beer-detail.resolver';
import { BeerDetailComponent } from './beer-detail.component';
import { SummarySectionComponent } from '../../components/summary-section/summary-section.component';
import { RecommendedBeersComponent } from '../../components/recommended-beers/recommended-beers.component';
import { BreweryLocationMapsComponent } from '../../components/brewery-locations-map/brewery-locations-map.component';

import { AgmCoreModule } from '@agm/core';

import { routing } from './beer-detail.router';

@NgModule({
    imports: [
        routing,
        CommonModule,
        RatingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCmeCDLj1uvr97KxjUiaade1zfeya02Uog'
        })
    ],
    declarations: [
        BeerDetailComponent,
        SummarySectionComponent,
        RecommendedBeersComponent,
        BreweryLocationMapsComponent,
    ],
    providers: [
        BeerDetailResolver,
    ],
})

export class BeerDetailModule {}
