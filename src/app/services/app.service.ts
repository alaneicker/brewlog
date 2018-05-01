import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    readOnly: boolean;

    constructor() {
        this.readOnly = false;
    }
}
