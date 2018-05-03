import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
    summaryContent: IBeerDetail;
    isLoggedIn: boolean;

    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
        this.summaryContent = this.route.snapshot.data.beerDetailSummary;
    }

}
