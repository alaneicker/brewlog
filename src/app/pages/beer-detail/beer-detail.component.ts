import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { fadeAnimation } from '../../animations/fade';

@Component({
    animations: [fadeAnimation],
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
    @HostBinding('@fadeAnimation')
    summaryContent: IBeerDetail;

    constructor(
        private httpService: HttpService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        window.scrollTo(0, 0);
        this.summaryContent = this.route.snapshot.data.beerDetailSummary;
    }

}
