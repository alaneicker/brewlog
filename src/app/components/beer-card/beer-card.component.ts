import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../services/http.service';

import { environment as env } from '../../../environments/environment';

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
        this.httpService.getFromApi({
            url: `${env.baseApiUrl}/beer/image/${this.imgId}`,
            responseType: 'text',
        })
        .then(res => this.photoUrl = res)
        .catch(err => console.log(err));
  }

}
