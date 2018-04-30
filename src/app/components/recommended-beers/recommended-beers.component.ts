import { Component, OnInit, Input } from '@angular/core';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-recommended-beers',
  templateUrl: './recommended-beers.component.html',
  styleUrls: ['./recommended-beers.component.scss']
})
export class RecommendedBeersComponent implements OnInit {
  @Input() beerStyle: string;
  recommendedBeers: IBeerDetail;

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.httpService
      .request('http://localhost:8080/recommended-beers', { beerStyle: this.beerStyle })
      .then(res => this.recommendedBeers = res)
      .catch(error => console.log(error));
  }

}
