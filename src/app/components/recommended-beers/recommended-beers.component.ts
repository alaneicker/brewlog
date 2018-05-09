import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../services/http.service';
import { BeerStyleService } from '../../services/beer-styles.service';

@Component({
    providers: [BeerStyleService],
    selector: 'app-recommended-beers',
    templateUrl: './recommended-beers.component.html',
    styleUrls: ['./recommended-beers.component.scss']
})
export class RecommendedBeersComponent implements OnInit {
    @Input() beerStyle: string;

    recommendedBeers = [];

    constructor(
        private httpService: HttpService,
        private beerStyleService: BeerStyleService,
    ) { }

    ngOnInit() {
        this.getRecommendedBeers();
    }

    getRecommendedBeers() {
        const styleIds = [];

        this.beerStyleService.styles.forEach(style => {
            if (style.name.match(this.beerStyle.replace(' ', '|'))) {
                styleIds.push(style.id);
            }
        });

        this.httpService
            .request(`http://localhost:8080/api/get-beers-by-style?styleIds=${styleIds}`)
            .then(res => {
                this.recommendedBeers = res.splice(0, 4);
            })
            .catch(error => console.log(error));
    }
}
