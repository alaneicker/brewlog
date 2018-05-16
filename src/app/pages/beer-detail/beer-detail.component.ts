import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { fadeAnimation } from '../../animations/fade';

import { UntappdApiKeys, UntappdApiUrls } from '../../enums/untappd';

@Component({
    animations: [fadeAnimation],
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
    @HostBinding('@fadeAnimation')
    userBeerData: IBeerDetail;
    untappdAllOtherBeers: any;

    untappdBeerDescription: string;
    untappdBeerAbv: string;
    untappdBeerIbu: string;
    untappdBeerStyle: string;

    untappdBrewery: string;
    untappdBreweryCity: string;
    untappdBreweryState: string;
    untappdLocationData: string;

    constructor(
        private httpService: HttpService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        window.scrollTo(0, 0);
        this.userBeerData = this.route.snapshot.data.beerDetailSummary;
        this.getUntappdContent();
    }

    getUntappdContent(): void {
        const beerName = this.userBeerData.beerName.replace(/\s/g, '+');

        Promise.all([
            this.httpService.request(`${UntappdApiUrls.BeerSearch}?q=${beerName}&client_id=${UntappdApiKeys.UntappdClientId}&client_secret=${UntappdApiKeys.UntappdClientSecret}`)
        ]).then(res => {
            const allUntappdBeers = res[0].response.beers.items;
            const beer = allUntappdBeers[0].beer;
            const brewery = allUntappdBeers[0].brewery;

            this.untappdBeerDescription = allUntappdBeers[0].beer.beer_description;
            this.untappdBeerAbv = beer.beer_abv;
            this.untappdBeerIbu = beer.beer_ibu;
            this.untappdBeerStyle = beer.beer_style;

            this.untappdBrewery = brewery.brewery_name;
            this.untappdBreweryCity = brewery.location.brewery_city;
            this.untappdBreweryState = brewery.location.brewery_state;

            allUntappdBeers.shift();
            this.untappdAllOtherBeers = allUntappdBeers;

            this.httpService.request(`${UntappdApiUrls.BreweryInfo}/${brewery.brewery_id}?client_id=${UntappdApiKeys.UntappdClientId}&client_secret=${UntappdApiKeys.UntappdClientSecret}`)
                .then(breweryData => {
                    this.untappdLocationData = breweryData.response.brewery.location;
                });
        });
    }

}
