import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';

@Injectable()
export class BeerDetailResolver implements Resolve<IBeerDetail> {
    constructor(
        private httpService: HttpService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IBeerDetail> {
        const id = route.params['id'];
        return this.httpService.request(`http://localhost:8080/api/beer/${id}`);
    }
}
