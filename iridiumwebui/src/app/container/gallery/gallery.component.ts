import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

const data = [
      {
        "src": "https://picsum.photos/458/354?image=0",
        "thumbnail": "https://picsum.photos/1200/1024?image=0",
      },
      {
        "src": "https://picsum.photos/458/354?image=1",
        "thumbnail": "https://picsum.photos/1200/1024?image=1",
      },
       {
        "src": "https://picsum.photos/458/354?image=2",
        "thumbnail": "https://picsum.photos/1200/1024?image=2",
      },
      {
        "src": "https://picsum.photos/458/354?image=3",
        "thumbnail": "https://picsum.photos/1200/1024?image=3",
      },
      {
        "src": "https://picsum.photos/458/354?image=4",
        "thumbnail": "https://picsum.photos/1200/1024?image=4",
      },
      {
        "src": "https://picsum.photos/458/354?image=5",
        "thumbnail": "https://picsum.photos/1200/1024?image=5",
      },
      {
        "src": "https://picsum.photos/458/354?image=6",
        "thumbnail": "https://picsum.photos/1200/1024?image=6",
      }
  ];

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
    titlemessage : string = "Gallery";
    items: GalleryItem[];
    
    itemsData = data;
    constructor(public gallery: Gallery, public lightbox: Lightbox) {
     }
    
    ngOnInit() {
      this.items = this.itemsData.map(item => {
        return new ImageItem({ src: item.src, thumb: item.thumbnail });
      });
      this.gallery.ref('lightbox').load(this.items);
      console.log(this.items);
    }

}
