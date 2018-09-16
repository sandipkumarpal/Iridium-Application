import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blocks',
    templateUrl: './blocks.component.html',
    styleUrls: ['./blocks.component.scss']
})

export class BlocksComponent implements OnInit {
    @Input('title') title: string;
    @Input('image') imgurl;
    @Input('link') linkurl;
    @Input('id') id;
    constructor(
        private router : Router
    ){}
    ngOnInit() {}

    onClick(id: number) {
        this.router.navigate(['home/', id]);
    }

}
