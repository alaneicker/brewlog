import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: `
        <div class="c-hero">
            <section class="wrapper padding--32">
                <h1 class="c-hero__title">
                    <ng-content></ng-content>
                </h1>
            </section>
        </div>
    `,
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
