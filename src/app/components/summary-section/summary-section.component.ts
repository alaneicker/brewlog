import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../services/app.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
    selector: 'app-summary-section',
    templateUrl: './summary-section.component.html',
    styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit {
    @Input() photoUrl: string;
    @Input() title: string;
    @Input() comments: string;
    @Input() style: string;
    @Input() abv: string;
    @Input() ibu: string;
    @Input() rating: number;
    @Input() brewery: string;
    @Input() breweryCity: string;
    @Input() breweryState: string;

    isLoggedIn: boolean;

    constructor(
        private appService: AppService,
    ) { }

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
    }
}
