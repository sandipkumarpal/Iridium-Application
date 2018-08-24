import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-staticBanner',
    templateUrl: './staticBanner.component.html',
    styleUrls: ['./staticBanner.component.scss']
})
export class staticBannerComponent implements OnInit {
    @Input() staticImg: string;
    constructor() { }
    ngOnInit(){
        
    }
}