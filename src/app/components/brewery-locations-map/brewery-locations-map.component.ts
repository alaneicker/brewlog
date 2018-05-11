import { Component, OnInit, Input } from '@angular/core';
import * as geocoder from 'geocoder';

export interface ILocation {
    formattedAddress: string;
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-google-map',
    templateUrl: './brewery-location-map.component.html',
})
export class BreweryLocationMapsComponent implements OnInit {
    @Input() mapHeight: string;
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
