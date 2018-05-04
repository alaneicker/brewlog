import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    template: `
        <div class="c-search">
            <label class="screenreader-only" for="search">Search</label>
            <input id="search" type="text" placeholder="Search">
        </div>
    `,
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() searchTerm: string;

    constructor() { }

    ngOnInit() {
    }

}
