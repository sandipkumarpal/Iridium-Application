import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
    titlemessage : string = "Contact Us";
    constructor(private location: Location) { } 

    cancelContact() {
        this.location.back(); 
    }
}
