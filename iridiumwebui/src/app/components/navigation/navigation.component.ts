import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
    constructor(route: ActivatedRoute) {
        route.params.subscribe(params => console.log("side menu id parameter", params['contact']));
    }
}
