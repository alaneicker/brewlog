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
    summaryContent: IBeerDetail;
    untappdSelectedBeer: any;
    untappdAllOtherBeers: any;

    constructor(
        private httpService: HttpService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        window.scrollTo(0, 0);
        this.summaryContent = this.route.snapshot.data.beerDetailSummary;
        // this.getUntappdContent();
    }

    getUntappdContent(): void {
        const beerName = this.summaryContent.beerName.replace(/\s/g, '+');

        Promise.all([
            this.httpService.request(`${UntappdApiUrls.BeerSearch}?q=${beerName}&client_id=${UntappdApiKeys.UntappdClientId}&client_secret=${UntappdApiKeys.UntappdClientSecret}`)
        ]).then(res => {
            const allUntappdBeers = res[0].response.beers.items;

            this.untappdSelectedBeer = allUntappdBeers[0];

            allUntappdBeers.shift();
            this.untappdAllOtherBeers = allUntappdBeers;
        });
    }

}
