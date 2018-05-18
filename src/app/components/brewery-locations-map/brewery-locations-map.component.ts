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
            [latitude]="locationData?.brewery_lat"
            [longitude]="locationData?.brewery_lng">
            <agm-marker
                [latitude]="locationData?.brewery_lat"
                [longitude]="locationData?.brewery_lng">
                <agm-info-window>
                    <h5>{{brewery}}</h5>
                    {{ locationData?.brewery_address }}, {{ locationData?.brewery_city }} {{ locationData?.brewery_state }}
                </agm-info-window>
            </agm-marker>
        </agm-map>
    `,
})
export class BreweryLocationMapsComponent implements OnInit {
    @Input() mapHeight: string;
    @Input() locationData: any;
    @Input() brewery: string;
    @Input() zoom: number;

    location: ILocation;

    constructor() {}

    ngOnInit() {
    }
}
