import { Component, OnInit } from '@angular/core';

import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  summaryContent: IBeerDetail = {
    photoUrl: 'assets/images/goose-island-green-line.jpg',
    beerName: 'Green Line Pale Ale',
    brewery: 'Goose Island Brewing Co.',
    location: 'Chicago, IL',
    style: 'American Pale Ale',
    abv: '5.4',
    ibu: '30',
    glassware: 'Mug, Pint Glass',
    comments: 'This was a complete disappointment. Not hoppy. Not tasty. Super flat and no head at all. Tastes like a flat Budweiser. Someone before said that it was abusive to the consumer and I completely agree. This is down right one of the worst beers I\'ve ever tasted.',
    rating: 1,
  };

  recommendedBeers: IBeerDetail[] = [
    {
      photoUrl: 'assets/images/honkers-ale.jpg',
      beerName: 'Honkers Ale',
      brewery: 'Goose Island Brewing Co.',
    },
    {
      photoUrl: 'assets/images/daisy-cutter.jpg',
      beerName: 'Daisy Cutter',
      brewery: 'Half Acre Beer Co.',
    },
    {
      photoUrl: 'assets/images/sky-high-rye.jpg',
      beerName: 'Sky High Rye',
      brewery: 'Arcadia Brewing Co.',
    },
    {
      photoUrl: 'assets/images/sierra-nevada-paleale.jpg',
      beerName: 'Sierra Nevada Pale Ale',
      brewery: 'Sierra Nevada Brewing Co.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
