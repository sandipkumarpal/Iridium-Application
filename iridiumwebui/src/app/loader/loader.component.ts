import { Component, OnInit } from '@angular/core';
// import './loader.function.js';

declare const $: any;

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
    ngOnInit() {
        console.log('ksasasas');
        $('body').click(function() {
            console.log('clicked');
        });
    }
}
