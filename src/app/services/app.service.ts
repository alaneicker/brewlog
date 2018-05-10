import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    isLoggedIn: boolean;

    constructor() {
        this.isLoggedIn = true;
    }
}
