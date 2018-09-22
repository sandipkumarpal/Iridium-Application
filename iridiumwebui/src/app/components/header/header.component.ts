import { Component } from '@angular/core';
import { headerAnimation } from '../../common/header.animation';

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
    
}
