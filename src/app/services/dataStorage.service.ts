import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

    setInLocalStorage(key, payload): void {
        localStorage.setItem(key, JSON.stringify(payload));
    }

    getFromLocalStorage(key: string): any {
        return JSON.stringify(localStorage.getItem(key));
    }
}
