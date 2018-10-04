import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../common/services/firebase.service';
import { IridiumAnimation } from '../../common/animations/iridium.animation';

@Component({
    selector: 'app-iridium',
    templateUrl: './iridium.component.html',
    styleUrls: ['./iridium.component.scss'],
    animations: [IridiumAnimation],
    host: {
        '[@IridiumAnimation]': ''
    }
})

export class IridiumComponent implements OnInit {
    titlemessage : string = "Iridium";
    lowerCaseTile: string = this.titlemessage.toLowerCase();
    tableImage: string;
    tableData: any[];

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.dataGotedFromServer(this.lowerCaseTile);
    }
    dataGotedFromServer(lowerCaseTile) {
        try {
            this.firebaseService.getData(lowerCaseTile)
                .valueChanges()
                .subscribe(resData => {
                  this.tableData = resData.table;
                  this.tableImage = resData.image;
                },
                error => {
                  console.log(error, "error");
                })
          } catch (e) {
            console.log(e);
          }
    }
}
