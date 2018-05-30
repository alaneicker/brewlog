import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    template: `
        <div class="c-rating">
            My Rating:
            <span class="u-text-gold" *ngFor="let star of stars">&#9733;</span>
        </div>
    `,
})
export class RatingComponent implements OnInit {
    @Input() rating: string;
    stars: string[];

    constructor() { }

    ngOnInit() {
        this.stars = Array(this.rating).fill('');
    }

}
