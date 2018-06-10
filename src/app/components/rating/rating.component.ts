import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-rating',
    template: `
        <div class="c-rating">
            My Rating:
            <span class="u-text-gold" *ngFor="let star of stars">&#9733;</span>
        </div>
    `,
})
export class RatingComponent implements OnInit, OnChanges {
    @Input() rating: number;
    stars: number[];

    constructor() { }

    ngOnInit() {
        this.setRatingStars();
    }

    ngOnChanges() {
        this.setRatingStars();
    }

    setRatingStars() {
        this.stars = Array(this.rating).fill(0);
    }

}
