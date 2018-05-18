import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    styleUrls: ['./rating.component.scss'],
    template: `
        <div class="c-rating">
            Your Rating:
            <span class="u-text-gold" *ngFor="let star of stars">&#9733;</span>
        </div>
    `,
})
export class RatingComponent implements OnInit {
    @Input() rating: number;
    stars: number[];

    constructor() { }

    ngOnInit() {
        this.stars = Array(this.rating).fill(0);
    }

}
