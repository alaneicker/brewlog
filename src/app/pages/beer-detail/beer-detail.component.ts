import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
    summaryContent: IBeerDetail;

    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.summaryContent = this.route.snapshot.data.beerDetailSummary;
    }

}
