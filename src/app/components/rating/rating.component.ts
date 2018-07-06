import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-rating',
    template: `
        <div *ngIf="stars" class="c-rating">
            Rating:
            <span class="u-text-gold" *ngFor="let star of stars">&#9733;</span>
        </div>
    `,
})
export class RatingComponent implements OnChanges {
    @Input() rating: number;
    stars: number[];

    constructor() { }

    ngOnChanges() {
        this.setRatingStars();
    }

    setRatingStars() {
        this.stars = Array(this.rating).fill(0);
    }

}
