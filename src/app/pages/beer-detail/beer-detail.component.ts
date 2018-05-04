import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { HttpService } from '../../services/http.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
    summaryContent: IBeerDetail;
    isLoggedIn: boolean;

    // BEERS: https://api.brewerydb.com/v2/beers?key=df7e3d9ef514039778837e71f2ddace3&styleId=60&hasLabels=Y
    // STYLES: https://api.brewerydb.com/v2/styles?key=df7e3d9ef514039778837e71f2ddace3

    constructor(
        private httpService: HttpService,
        private appService: AppService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
        this.summaryContent = this.route.snapshot.data.beerDetailSummary;
    }

}
