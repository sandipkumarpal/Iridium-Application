import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
    titlemessage : string = "Gallery";
    bannerImage : string = "http://universesofttechnologies.in/amru_new/images/banner1.jpg"; 
}
