import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { RatingModule } from '../../components/rating/rating.module';
import { AddBeerFormModule } from '../../components/add-beer-form/add-beer-form.module';

import { DataStorageService } from '../../services/data-storage.service';

import { BeerDetailResolver } from './beer-detail.resolver';
import { BeerDetailComponent } from './beer-detail.component';
import { SummarySectionComponent } from '../../components/summary-section/summary-section.component';
import { RecommendedBeersComponent } from '../../components/recommended-beers/recommended-beers.component';
import { BreweryLocationMapsComponent } from '../../components/brewery-locations-map/brewery-locations-map.component';
import { UntappdCheckinsComponent } from '../../components/untappd-checkins/untappd-checkins.component';

import { routing } from './beer-detail.router';

@NgModule({
    imports: [
        routing,
        CommonModule,
        RatingModule,
        AddBeerFormModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCmeCDLj1uvr97KxjUiaade1zfeya02Uog'
        })
    ],
    declarations: [
        BeerDetailComponent,
        SummarySectionComponent,
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
