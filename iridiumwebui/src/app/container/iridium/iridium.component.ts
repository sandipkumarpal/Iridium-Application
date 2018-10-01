import { Component } from '@angular/core';
import { IridiumAnimation } from '../../common/animations/iridium.animation';

@Component({
    selector: 'app-iridium',
    templateUrl: './iridium.component.html',
    styleUrls: ['./iridium.component.scss'],
    animations: [IridiumAnimation],
    host: {
        '[@IridiumAnimation]': ''
    }
})

export class IridiumComponent {
    titlemessage : string = "Iridium";
}
