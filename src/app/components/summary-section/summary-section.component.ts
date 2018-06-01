import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../services/app.service';
import { HttpService } from '../../services/http.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { environment as env } from '../../../environments/environment';

@Component({
    selector: 'app-summary-section',
    templateUrl: './summary-section.component.html',
    styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit {
    @ViewChild('summary') summary: ElementRef;
    @Input() routeId: string;
    @Input() imgId: string;
    @Input() photoUrl: string;
    @Input() title: string;
    @Input() comments: string;
    @Input() datePosted: string;
    @Input() style: string;
    @Input() abv: string;
    @Input() ibu: string;
    @Input() rating: number;
    @Input() brewery: string;
    @Input() breweryCity: string;
    @Input() breweryState: string;
    @Input() breweryWebsite: string;

    isLoggedIn: boolean;

    isEditMode = false;

    constructor(
        private appService: AppService,
        private httpService: HttpService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
    }

    startEdit() {
        this.isEditMode = true;
    }

    cancelEdit() {
        this.isEditMode = false;
    }

    saveChanges() {}

    deleteItem() {
        this.httpService.delete({ url: `${env.baseApiUrl}/beer/delete/${this.imgId}/${this.routeId}` })
            .then(res => {
                if (res.affectedRows > 0) {
                    this.router.navigate(['blank']).then(() => {
                        this.router.navigate(['/']);
                    });
                }
            });
    }
}
