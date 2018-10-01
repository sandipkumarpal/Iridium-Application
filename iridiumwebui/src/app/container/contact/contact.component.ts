import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ContactAnimation } from '../../common/animations/contact.animation';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [ContactAnimation],
    host: {
        '[@ContactAnimation]': ''
    }
})

export class ContactComponent {
    titlemessage : string = "Contact Us";
    constructor(private location: Location) { } 

    cancelContact() {
        this.location.back(); 
    }
}
