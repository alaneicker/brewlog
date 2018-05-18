import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

    setInSessionStorage(key, payload): void {
        sessionStorage.setItem(key, JSON.stringify(payload));
    }

    getFromSessionStorage(key: string): any {
        const data = sessionStorage.getItem(key);
        if (data !== null) {
            return JSON.parse(data);
        }
        return null;
    }
}
