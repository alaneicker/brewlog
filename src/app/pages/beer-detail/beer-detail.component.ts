import { Component, OnInit } from '@angular/core';

import { IsummarySection } from '../../interfaces/summary-section.interface';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  summaryContent: IsummarySection = {
    photoUrl: 'assets/images/goose-island-green-line.jpg',
    beerName: 'Green Line Pale Ale',
    brewery: 'Goose Island Brewing Co.',
    location: 'Chicago, IL',
    abv: '5.8',
    ibu: '38',
    glassware: 'Mug, Pint Glass',
    comments: 'This was a complete disappointment. Not hoppy. Not tasty. Super flat and no head at all. Tastes like a flat Budweiser. Someone before said that it was abusive to the consumer and I completely agree. This is down right one of the worst beers I\'ve ever tasted.',
    rating: 2,
  };

  constructor() { }

  ngOnInit() {
  }

}
