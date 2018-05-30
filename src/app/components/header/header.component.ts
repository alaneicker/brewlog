import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() appName: string;
    isLoggedIn: boolean;

    modalActiveStates = {
        addBeer: false,
    };

    constructor(
        private appService: AppService,
    ) { }

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn;
    }

    openModal(modal) {
        this.modalActiveStates[modal] = true;
    }

    closeModal(modal) {
        this.modalActiveStates[modal] = false;
    }

    logIn() {}

    logOut() {}

}
