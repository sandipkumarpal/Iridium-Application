import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    constructor(){}

    getData() {
        console.log('Hello, I am a Service.');
    }
}
