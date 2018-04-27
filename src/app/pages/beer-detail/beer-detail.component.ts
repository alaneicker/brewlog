import { Component, OnInit } from '@angular/core';

import { IsummarySection } from '../../interfaces/summary-section.interface';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  summaryContent: IsummarySection = {
    photoUrl: '',
    beerName: '',
    brewery: '',
    abv: '',
    ibu: '',
    glassware: '',
    title: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
