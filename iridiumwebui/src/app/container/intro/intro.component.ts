import { Component } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
    titlemessage : string = "Intro";
    bannerImage : string = "http://universesofttechnologies.in/amru_new/images/banner1.jpg"; 
}
