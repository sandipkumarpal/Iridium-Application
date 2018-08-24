import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
    titlemessage : string = "Gallery";
    bannerImage : string = "../../assets/banner1.jpg"; 
}
