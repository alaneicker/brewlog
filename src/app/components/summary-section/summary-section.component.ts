import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

import { AppService } from '../../services/app.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
    selector: 'app-summary-section',
    templateUrl: './summary-section.component.html',
    styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit, AfterViewInit {
    @ViewChild('summary') summary: ElementRef;
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
    ) { }

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
    }

    ngAfterViewInit() {
        // this.summary.nativeElement.style.height = `${this.summary.nativeElement.offsetHeight}px`;
    }

    startEdit() {
        this.isEditMode = true;
    }

    cancelEdit() {
        this.isEditMode = false;
    }

    saveChanges() {}
}
