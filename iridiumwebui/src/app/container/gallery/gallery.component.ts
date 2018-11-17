import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { FirebaseService } from '../../common/services/firebase.service'
import { DataService } from '../../common/services/data.service';
import { GalleryAnimation } from '../../common/animations/gallery.animation';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    animations: [GalleryAnimation],
    host: {
        '[@GalleryAnimation]': ''
    }
})

export class GalleryComponent implements OnInit {
    titlemessage : string = "Gallery";
    lowerCaseTile: string = this.titlemessage.toLowerCase();
    galleryData:any[];
    items: GalleryItem[];

    dataGallery:any;

    constructor(
      private location: Location,
      public gallery: Gallery,
      public lightbox: Lightbox,
      private dataService : DataService,
      private firebaseService: FirebaseService) { }

    ngOnInit() {
      this.dataGotedFromServer(this.lowerCaseTile);
      this.fetchGalleryData(this.lowerCaseTile);
    }
    fetchGalleryData(lowerCaseTile) {
      try {
        this.dataService.getDataFromJson(lowerCaseTile).pipe(
          map(res => res[0].data.user_data)
        ).subscribe(res => {
           this.dataGallery = res;
           console.log(this.dataGallery);
        },
        error => {
          console.log(error, "error");
        });
      } catch (e) {
        console.log(e);
      }
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

    clickGoToBack() {
      this.location.back();
    }
}
