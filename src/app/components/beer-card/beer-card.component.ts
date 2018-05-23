import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-beer-card',
    templateUrl: './beer-card.component.html',
    styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {
    @Input() title: string;
    @Input() rating: string;
    @Input() imgId: string;
    @Input() routeId: string;

    photoUrl: string;

  constructor(
      private httpService: HttpService,
  ) { }

  ngOnInit() {
        this.httpService.request({
            url: `http://localhost:8080/api/beer/image/${this.imgId}`,
            responseType: 'text',
        })
        .then(res => this.photoUrl = res)
        .catch(err => console.log(err));
  }

}
