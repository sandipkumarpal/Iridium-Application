import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
    titlemessage : string = "Intro";
    bannerImage : string = "../../assets/banner1.jpg"; 
}
