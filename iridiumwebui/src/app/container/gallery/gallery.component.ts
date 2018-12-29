import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
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
    lowerCaseTitle: string = this.titlemessage.toLowerCase();
    galleryData:any[];
    items: GalleryItem[];

    dataGallery:any;

    constructor(
      private location: Location,
      public gallery: Gallery,
      public lightbox: Lightbox,
      private dataService : DataService
    ) { }

    ngOnInit() {
      this.fetchGalleryData(this.lowerCaseTitle);
    }
    fetchGalleryData(pageTitle) {
      try {
        this.dataService.getDataFromJson(pageTitle).pipe(
          map(res => res[0].gallery)
        ).subscribe(res => {
           this.dataGallery = res.data;
           console.log(this.dataGallery);
           this.items = this.dataGallery.map(item => {
            return new ImageItem({ src: item.src, thumb: item.thumbnail });
          });
          this.gallery.ref('lightbox').load(this.items);
        },
        error => {
          console.log(error, "error");
        });
      } catch (e) {
        console.log(e);
      }
    }

    clickGoToBack() {
      this.location.back();
    }
}
