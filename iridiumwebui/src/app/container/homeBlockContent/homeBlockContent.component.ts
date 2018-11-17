import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../common/services/firebase.service';
import { homeBlockContentAnimation } from '../../common/animations/homeBlockContent.animation';

@Component({
    selector: 'app-homeBlockContent',
    templateUrl: './homeBlockContent.component.html',
    styleUrls: ['./homeBlockContent.component.scss'],
    animations: [ homeBlockContentAnimation ],
    host: {
        '[@homeBlockContentAnimation]': ''
    }
})

export class HomeBlockContentComponent implements OnInit {
    page: string = 'home';
    data: any;
    color: string;
    content: any;
    image: string;
    title: string;
    subContent: string;
    subImage: string;
    blocks: any[];

    constructor(
        private route: ActivatedRoute,
        private firebaseService: FirebaseService) { }

    ngOnInit() {
        try {
            this.firebaseService.getData(this.page)
                .valueChanges()
                .subscribe(resData => {
                    console.log(resData);
                    this.data = resData.data;
                    this.route.params.subscribe(params => {
                        let id = params['id'];
                        let hContent = this.data.filter(element => element.id == id);
                        this.content = hContent[0].content;
                        this.color = hContent[0].color;
                        this.image = hContent[0].image;
                        this.title = hContent[0].title;
                        this.subContent = hContent[0].subContent;
                        this.subImage = hContent[0].subImage;
                        this.blocks = hContent[0].blocks;
                    });
                },
                error => {
                  console.log(error, "error");
                })
        } catch (e) {
            console.log(e);
        }


    }
}
