import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { FirebaseService } from '../../common/services/firebase.service'

import { GalleryAnimation } from '../../common/animations/gallery.animation';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    animations: [GalleryAnimation],
    host: {
        '[@GalleryAnimation]': ''
    }
})
// export class GalleryComponent {
//   courses: any[];

//   constructor(db: AngularFireDatabase) {
//     db.list('/gallery').valueChanges()
//       .subscribe(course => {
//         this.courses = course;
//         console.log(this.courses);
//       });
//   }
// }
export class GalleryComponent implements OnInit {
    titlemessage : string = "Gallery";
    lowerCaseTile: string = this.titlemessage.toLowerCase();
    galleryData:any[];
    items: GalleryItem[];

    constructor(
      public gallery: Gallery, 
      public lightbox: Lightbox, 
      private firebaseService: FirebaseService) { }

    ngOnInit() {
      this.dataGotedFromServer(this.lowerCaseTile);
    }
    dataGotedFromServer(lowerCaseTile) {
      try {
        this.firebaseService.getData(lowerCaseTile)
            .valueChanges()
            .subscribe(resData => {
              this.galleryData = resData.data;
              this.items = this.galleryData.map(item => {
                return new ImageItem({ src: item.src, thumb: item.thumbnail });
              });
              this.gallery.ref('lightbox').load(this.items);
            },
            error => {
              console.log(error, "error");
            })
      } catch (e) {
        console.log(e);
      }
    }
}
