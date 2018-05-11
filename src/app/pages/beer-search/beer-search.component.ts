import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeAnimation } from '../../animations/fade';

@Component({
  animations: [fadeAnimation],
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit {
  @HostBinding('@fadeAnimation')
  searchPlaceholder: string;

  constructor() { }

  ngOnInit() {
    this.searchPlaceholder = 'Search for Beers...';
  }

}
