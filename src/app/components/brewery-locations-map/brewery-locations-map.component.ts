import { Component, OnInit, Input } from '@angular/core';
import * as geocoder from 'geocoder';

export interface ILocation {
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-google-map',
    styles: [`
        agm-map {
            height: 300px;
        }
    `],
    template: `
        <div class="u-flex--medium u-flex--hr">
            <div class="u-flex__item--grow u-vr-2" *ngFor="let l of locations">
                <agm-map [zoom]="zoom" [latitude]="l.lat" [longitude]="l.lng">
                    <agm-marker [latitude]="l.lat" [longitude]="l.lng"></agm-marker>
                </agm-map>
            </div>
        </div>
    `,
})
export class BreweryLocationMapsComponent implements OnInit {
    @Input() location: string;
    @Input() brewery: string;
    @Input() zoom: number;
    locations: ILocation[] = [];

    constructor() { }

    ngOnInit() {
        geocoder.geocode(this.brewery, ( err, data ) => {
            data.results.forEach(location => {
                this.locations.push({
                    lat: location.geometry.location.lat,
                    lng: location.geometry.location.lng,
                });
            });
        });
    }
}
