import { Component } from '@angular/core';
import { homeAnimation } from '../../common/home.animation';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [ homeAnimation ],
    host: {
        '[@homeAnimation]': ''
    }
})

export class HomeComponent {

}
