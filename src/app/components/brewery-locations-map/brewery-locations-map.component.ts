import { Component, OnInit, Input } from '@angular/core';
import * as geocoder from 'geocoder';

export interface ILocation {
    formattedAddress: string;
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
            <div class="u-flex__item--grow u-vr-1" *ngFor="let l of locations">
                <h5 class="u-vr u-align-center">{{ l.formattedAddress }}</h5>
                <agm-map [zoom]="zoom" [latitude]="l.lat" [longitude]="l.lng">
                    <agm-marker [latitude]="l.lat" [longitude]="l.lng"></agm-marker>
                </agm-map>
            </div>
        </div>
    `,
})
export class BreweryLocationMapsComponent implements OnInit {
    @Input() brewery: string;
    @Input() city: string;
    @Input() state: string;
    @Input() country: string;
    @Input() zoom: number;

    locations: ILocation[] = [];

    constructor() {}

    ngOnInit() {
        geocoder.geocode(this.formattedLocationString, ( err, data ) => {
            data.results.forEach(location => {
                this.locations.push({
                    formattedAddress: location.formatted_address,
                    lat: location.geometry.location.lat,
                    lng: location.geometry.location.lng,
                });
            });
        });
    }

    get formattedLocationString(): string {
        return [this.brewery, this.city, this.state, this.country].join(', ');
    }
}
