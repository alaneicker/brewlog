import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit {
  searchPlaceholder: string;

  constructor() { }

  ngOnInit() {
    this.searchPlaceholder = 'Search for Beers...';
  }

}
