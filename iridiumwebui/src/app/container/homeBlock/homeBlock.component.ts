import { Component } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { FirebaseService } from '../../common/services/firebase.service';
import { homeBlockAnimation } from '../../common/animations/homeBlock.animation';

@Component({
    selector: 'app-homeBlock',
    templateUrl: './homeBlock.component.html',
    styleUrls: ['./homeBlock.component.scss'],
    animations: [ homeBlockAnimation ],
    host: {
        '[@homeBlockAnimation]': ''
    },
    providers: [DataService]
})

export class HomeBlockComponent {
    page: string = 'home';
    data: any;

    constructor(
        private dataservice : DataService, 
        private firebaseService: FirebaseService
        ) {
        // this.totalData = dataservice.getDataFromJson();
    }

    ngOnInit() {
        this.dataGotedFromServer(this.page);
    }
    dataGotedFromServer(page) {
        // try {
        //   this.dataservice.getDataFromJson()
        //     .subscribe(resp => {
        //       console.log(resp, "res");
        //       this.totalData = resp
        //     },
        //       error => {
        //         console.log(error, "error");
        //       })
        // } catch (e) {
        //   console.log(e);
        // }
        try {
            this.firebaseService.getData(page)
                .valueChanges()
                .subscribe(resData => {
                    console.log(resData);
                    this.data = resData.data;
                },
                error => {
                  console.log(error, "error");
                })
          } catch (e) {
            console.log(e);
          }
    }
}