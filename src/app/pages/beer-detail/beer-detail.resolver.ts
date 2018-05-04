import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { BeerStyleService } from '../../services/beer-styles.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Injectable()
export class BeerDetailResolver implements Resolve<IBeerDetail> {
    constructor(
        private httpService: HttpService,
        private beerStyleService: BeerStyleService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IBeerDetail> {
        return this.httpService.request(`http://localhost:8080/api/beer/${route.params['id']}`)
            .then(res => {
                if (res.id) {

                    this.httpService.request('http://localhost:8080/api/all-beers')
                        .then((data: any) => {
                            console.log(data);
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    return res;
                } else {
                    this.router.navigate(['/dashboard']);
                }
            });
    }
}
