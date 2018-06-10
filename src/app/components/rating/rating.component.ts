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
        this.stars = Array(this.rating).fill(0);
    }

    ngOnChanges() {
        this.stars = Array(this.rating).fill(0);
    }

}
