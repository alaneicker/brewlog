import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-recommended-beers',
    templateUrl: './recommended-beers.component.html',
    styleUrls: ['./recommended-beers.component.scss']
})
export class RecommendedBeersComponent implements OnInit {
    @Input() title: string;
    @Input() label: string;
    @Input() abv: string;
    @Input() ibu: string;
    @Input() style: string;
    @Input() brewery: string;
    @Input() breweryWebsite: string;

    constructor() { }

    ngOnInit() {
    }
}
