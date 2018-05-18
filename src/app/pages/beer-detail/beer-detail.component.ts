import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { DataStorageService } from '../../services/data-storage.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { fadeAnimation } from '../../animations/fade';

import { UntappdApiAuth, UntappdApiUrls } from '../../enums/untappd';

@Component({
    animations: [fadeAnimation],
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
    @HostBinding('@fadeAnimation')
    userBeerData: IBeerDetail;

    untappdBeerDescription: string;
    untappdBeerAbv: string;
    untappdBeerIbu: string;
    untappdBeerStyle: string;
    untappdBeerLabel: string;

    untappdBrewery: string;
    untappdBreweryCity: string;
    untappdBreweryState: string;
    untappdLocationData: string;
    untappdBreweryWebsite: string;

    untappdAllOtherBeers: any;
    beerCheckins: any;

    routeId: string;

    storedBeerDetail: any;
    untappdCheckinData: any;
    untappdBreweryLocationData: any;

    constructor(
        private httpService: HttpService,
        private route: ActivatedRoute,
        private dataStorageService: DataStorageService,
    ) {
        this.userBeerData = this.route.snapshot.data.beerDetailSummary;
        this.routeId = this.userBeerData.routeId;
        this.storedBeerDetail = JSON.parse(this.dataStorageService.getFromSessionStorage(`untappd-beer-data-${this.routeId}`));
        this.untappdCheckinData = JSON.parse(this.dataStorageService.getFromSessionStorage(`untappd-checkin-data-${this.routeId}`));
        this.untappdBreweryLocationData = JSON.parse(this.dataStorageService.getFromSessionStorage(`untappd-brewery-data-${this.routeId}`));
    }

    ngOnInit() {
        window.scrollTo(0, 0);

        if (this.storedBeerDetail === null) {
            this.getUntappdContent();
        } else {
            this.setUntappdContent(this.storedBeerDetail);
        }
    }

    setUntappdContent(res: any) {
        // Set beer data
        const allUntappdBeers = res.response.beers.items;
        const beer = allUntappdBeers[0].beer;
        const brewery = allUntappdBeers[0].brewery;

        this.untappdBeerDescription = allUntappdBeers[0].beer.beer_description;
        this.untappdBeerAbv = beer.beer_abv;
        this.untappdBeerIbu = beer.beer_ibu;
        this.untappdBeerStyle = beer.beer_style;
        this.untappdBeerLabel = beer.beer_label;

        this.untappdBrewery = brewery.brewery_name;
        this.untappdBreweryCity = brewery.location.brewery_city;
        this.untappdBreweryState = brewery.location.brewery_state;
        this.untappdBreweryWebsite = brewery.contact.url;

        allUntappdBeers.shift();
        this.untappdAllOtherBeers = allUntappdBeers;

        // Get/Set brewery and check in data
        if (this.untappdCheckinData !== null && this.untappdBreweryLocationData !== null) {
            this.untappdLocationData = this.untappdBreweryLocationData.response.brewery.location;

            this.beerCheckins = this.untappdCheckinData.response.checkins.items.filter(item => {
                if (item.checkin_comment !== '') {
                    return item;
                }
            });
        } else {
            Promise.all([
                this.httpService.request(`${UntappdApiUrls.BeerCheckins}/${beer.bid}?&${UntappdApiAuth.clientAuthStr}`),
                this.httpService.request(`${UntappdApiUrls.BreweryInfo}/${brewery.brewery_id}?&${UntappdApiAuth.clientAuthStr}`),
            ])
            .then((data) => {
                this.beerCheckins = data[0].response.checkins.items.filter(item => {
                    if (item.checkin_comment !== '') {
                        return item;
                    }
                });
                this.untappdLocationData = data[1].response.brewery.location;

                this.dataStorageService.setInSessionStorage(`untappd-brewery-data-${this.routeId}`, data[1]);
                this.dataStorageService.setInSessionStorage(`untappd-checkin-data-${this.routeId}`, data[0]);
            });
        }
    }

    getUntappdContent() {
        const beerName = this.userBeerData.beerName.replace(/\s/g, '+');

        this.httpService
            .request(`${UntappdApiUrls.BeerSearch}?q=${beerName}&${UntappdApiAuth.clientAuthStr}`)
            .then(res => {
                this.dataStorageService.setInSessionStorage(`untappd-beer-data-${this.routeId}`, res);
                this.setUntappdContent(res);
            });
    }

}
