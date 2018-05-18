import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-untappd-checkins',
    styleUrls: ['./untappd-checkins.component.scss'],
    template: `
        <div class="u-flex u-flex--hr">
            <img class="c-untappd-avatar" [src]="userAvatar">
            <div class="u-flex__item">
                <h4 *ngIf="userName">{{ userName }}</h4>
                <h5 class="u-text-normal" *ngIf="createdAt">{{ createdAt }}</h5>
                <h5 class="u-text-normal" *ngIf="beerName">{{ beerName }}</h5>
                <div *ngIf="rating">Rating: {{ rating }}</div>
                <p *ngIf="comment">{{ comment }}</p>
            </div>
        </div>
    `,
})
export class UntappdCheckinsComponent implements OnInit {
    @Input() userAvatar: string;
    @Input() userName: string;
    @Input() createdAt: string;
    @Input() beerName: string;
    @Input() rating: string;
    @Input() comment: string;

    constructor() { }

    ngOnInit() {
    }

}
