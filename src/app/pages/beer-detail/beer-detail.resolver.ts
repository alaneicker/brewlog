import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

import { environment as env } from '../../../environments/environment';

@Injectable()
export class BeerDetailResolver implements Resolve<IBeerDetail> {
    constructor(
        private httpService: HttpService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IBeerDetail> {
        return this.httpService.get({
            url: `${env.baseApiUrl}/beer/${route.params['imgId']}/${route.params['id']}`,
        })
            .then(res => {
                if (res.id) {
                    return res;
                } else {
                    this.router.navigate(['/dashboard']);
                }
            });
    }
}
