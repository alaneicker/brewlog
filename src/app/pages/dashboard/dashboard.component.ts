import { Component, OnInit, HostBinding } from '@angular/core';

import { IBeerDetail } from '../../interfaces/beer-detail.interface';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    beers: IBeerDetail[];

    constructor(
        private httpService: HttpService
    ) { }

    ngOnInit() {
        this.httpService.request('http://localhost:8080/api/beers')
            .then(res => this.beers = res)
            .catch(error => console.log(error));
    }

    getImageUrl(imgId: number) {
        this.httpService.request(`http://localhost:8080/api/beer/image/${imgId}`, 'text')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }
}
