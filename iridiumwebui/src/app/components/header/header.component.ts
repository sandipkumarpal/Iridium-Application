import { Component, ViewChild, Input } from '@angular/core';
import { headerAnimation } from '../../common/animations/header.animation';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [ headerAnimation ],
    host: {
        '[@headerAnimation]': ''
    }
})

export class HeaderComponent {
    showMenu: boolean = false;
    constructor() {}
    menuToggle() {
        this.showMenu = !this.showMenu;
    }
    ngOnInit() {

    }
}
