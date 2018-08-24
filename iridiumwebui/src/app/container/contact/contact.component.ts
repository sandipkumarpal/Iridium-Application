import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
    titlemessage : string = "Contact Us";
    bannerImage : string = "../../assets/banner1.jpg";
}
