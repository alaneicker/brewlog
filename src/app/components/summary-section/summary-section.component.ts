import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../services/app.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
    selector: 'app-summary-section',
    templateUrl: './summary-section.component.html',
    styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit {
    @Input() userBeerData: IBeerDetail;
    @Input() untappdSelectedBeer: any;
    @Input() untappdAllOtherBeers: any;

    isLoggedIn: boolean;

    constructor(
        private appService: AppService,
    ) { }

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
    }
}
