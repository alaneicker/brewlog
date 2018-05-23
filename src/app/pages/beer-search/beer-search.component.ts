import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit {
  searchPlaceholder: string;

  constructor() { }

  ngOnInit() {
    this.searchPlaceholder = 'Search for Beer, Brewery or Beer Style';
  }

}
