import { Component, OnInit, Input } from '@angular/core';
import * as geocoder from 'geocoder';

export interface ILocation {
    formattedAddress: string;
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-google-map',
    template: `
        <agm-map
            [style.height]="mapHeight + 'px'"
            [zoom]="zoom"
            [latitude]="location?.lat"
            [longitude]="location?.lng">
            <agm-marker
                [latitude]="location?.lat"
                [longitude]="location?.lng">
                <agm-info-window>
                    <h5>{{brewery}}</h5>
                    {{ location?.formattedAddress }}
                </agm-info-window>
            </agm-marker>
        </agm-map>
    `,
})
export class BreweryLocationMapsComponent implements OnInit {
    @Input() mapHeight: string;
    @Input() brewery: string;
    @Input() city: string;
    @Input() state: string;
    @Input() country: string;
    @Input() zoom: number;

    location: ILocation;

    constructor() {}

    ngOnInit() {
        geocoder.geocode(this.formattedLocationString, ( err, data ) => {
            this.location = {
                formattedAddress: data.results[0].formatted_address,
                lat: data.results[0].geometry.location.lat,
                lng: data.results[0].geometry.location.lng,
            };
        });
    }

    get formattedLocationString(): string {
        return [this.brewery, this.city, this.state, this.country].join(', ');
    }
}
