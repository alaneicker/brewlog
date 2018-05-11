import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-google-map',
    styles: [`
        agm-map {
            height: 300px;
        }
    `],
    template: `
        <agm-map [latitude]="lat" [longitude]="lng">
            <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
        </agm-map>
    `,
})
export class GoogleMapComponent implements OnInit {
    lat = 51.678418;
    lng = 7.809007;

    constructor() { }

    ngOnInit() {
    }
}
