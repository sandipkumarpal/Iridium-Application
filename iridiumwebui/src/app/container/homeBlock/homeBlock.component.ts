import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { map } from 'rxjs/operators';
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

export class HomeBlockComponent implements OnInit {
    page: string = 'home';
    data: any = [];
    totalData: any;
    constructor(
        private dataService : DataService
    ) { }

    ngOnInit() {
        this.fetchData(this.page);
    }
    fetchData(pageTitle) {
      try {
        this.dataService.getDataFromJson(pageTitle).pipe(
          map(res => res[0].home)
        ).subscribe(resData => {
          this.data = resData.data;
        },
        error => {
          console.log(error, "error");
        });
      } catch (e) {
        console.log(e);
      }
    }
}
