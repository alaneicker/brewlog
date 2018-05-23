import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { DataStorageService } from '../../services/data-storage.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { UntappdApiAuth, UntappdApiUrls } from '../../enums/untappd';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
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

    sessionStorageKeys: any;

    constructor(
        private httpService: HttpService,
        private route: ActivatedRoute,
        private dataStorageService: DataStorageService,
    ) {
        this.userBeerData = this.route.snapshot.data.beerDetailSummary;
        this.routeId = this.userBeerData.routeId;

        this.sessionStorageKeys = {
            untappdBeerKey: `untappd-beer-data-${this.routeId}`,
            untappdBreweryKey: `untappd-brewery-data-${this.routeId}`,
            untappdCheckinKey: `untappd-checkin-data-${this.routeId}`,
        };

        this.storedBeerDetail = JSON.parse(this.dataStorageService.getFromSessionStorage(this.sessionStorageKeys.untappdBeerKey));
        this.untappdCheckinData = JSON.parse(this.dataStorageService.getFromSessionStorage(this.sessionStorageKeys.untappdBreweryKey));
        this.untappdBreweryLocationData = JSON.parse(this.dataStorageService.getFromSessionStorage(this.sessionStorageKeys.untappdCheckinKey));
    }

    ngOnInit() {
        window.scrollTo(0, 0);

        if (this.storedBeerDetail === null) {
            console.log('From api');
            this.getUntappdContentFromApi();
        } else {
            console.log('From storage');
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
            this.beerCheckins = this.untappdCheckinData.response.checkins.items.filter(item => item.checkin_comment !== '');
        } else {
            this.setBreweryAndCheckinContentFromApi(beer.bid, brewery.brewery_id);
        }
    }

    setBreweryAndCheckinContentFromApi(beerId, breweryId) {
        Promise.all([
            this.httpService.getFromApi({ url: `${UntappdApiUrls.BeerCheckins}/${beerId}?&${UntappdApiAuth.clientAuthStr}` }),
            this.httpService.getFromApi({ url: `${UntappdApiUrls.BreweryInfo}/${breweryId}?&${UntappdApiAuth.clientAuthStr}` }),
        ])
        .then((data) => {
            this.beerCheckins = data[0].response.checkins.items.filter(item => item.checkin_comment !== '');
            this.untappdLocationData = data[1].response.brewery.location;

            this.dataStorageService.setInSessionStorage(this.sessionStorageKeys.untappdCheckinKey, data[1]);
            this.dataStorageService.setInSessionStorage(this.sessionStorageKeys.untappdBreweryKey, data[0]);
        });
    }

    getUntappdContentFromApi() {
        const beerName = this.userBeerData.beerName.replace(/\s/g, '+');

        this.httpService
            .getFromApi({ url: `${UntappdApiUrls.BeerSearch}?q=${beerName}&${UntappdApiAuth.clientAuthStr}` })
            .then(res => {
                this.dataStorageService.setInSessionStorage(this.sessionStorageKeys.untappdBeerKey, res);
                this.setUntappdContent(res);
            });
    }

}
