import { Component, OnInit, Input } from '@angular/core';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Component({
  selector: 'app-recommended-beers',
  templateUrl: './recommended-beers.component.html',
  styleUrls: ['./recommended-beers.component.scss']
})
export class RecommendedBeersComponent implements OnInit {
  @Input() recommendedBeers: IBeerDetail[];

  constructor() { }

  ngOnInit() {
  }

}
