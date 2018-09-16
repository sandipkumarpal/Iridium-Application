import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    titlemessage : string = "About Us";
    bannerImage : string = "http://universesofttechnologies.in/amru_new/images/banner1.jpg"; 
}
