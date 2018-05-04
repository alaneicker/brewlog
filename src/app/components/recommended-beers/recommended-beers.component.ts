import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../services/http.service';
import { BeerStyleService } from '../../services/beer-styles.service';

@Component({
    selector: 'app-recommended-beers',
    templateUrl: './recommended-beers.component.html',
    styleUrls: ['./recommended-beers.component.scss']
})
export class RecommendedBeersComponent implements OnInit {
    @Input() beerStyle: string;
    recommendedBeers: any;
    // recommendedBeers = [];

  constructor(
    private httpService: HttpService,
    private beerStyleService: BeerStyleService,
  ) { }

  ngOnInit() {
    this.httpService
        .request('http://localhost:8080/recommended-beers', { beerStyle: this.beerStyle })
        .then(res => this.recommendedBeers = res)
        .catch(error => console.log(error));
    // this.getRecommendedBeers();
  }

  getRecommendedBeers() {
    const styleIds = [];
    this.beerStyleService.styles.forEach(style => {
        if (style.name.match(this.beerStyle.replace(' ', '|'))) {
            styleIds.push(style.id);
        }
    });

    this.httpService
        .request(`http://localhost:8080/api/get-beers-by-style/${styleIds}`)
        .then(res => {
            res.forEach(item => {
                this.recommendedBeers.push(JSON.parse(item).data);
            });
        })
        .catch(error => console.log(error));
  }
}
