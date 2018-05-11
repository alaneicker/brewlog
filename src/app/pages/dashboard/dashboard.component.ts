import { Component, OnInit, HostBinding } from '@angular/core';

import { IBeerDetail } from '../../interfaces/beer-detail.interface';
import { HttpService } from '../../services/http.service';

import { fadeAnimation } from '../../animations/fade';

@Component({
  animations: [fadeAnimation],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @HostBinding('@fadeAnimation')
  beers: IBeerDetail[];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.request('http://localhost:8080/api/beers')
      .then(res => this.beers = res)
      .catch(error => console.log(error));
  }

}
