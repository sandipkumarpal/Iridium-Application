import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public showMenu = false;
    public buttonName = `<i class="material-icons left">dehaze</i>`;
    ngOnInit() {
    }
    toggle() {
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
          this.buttonName = 'close';
        } else {
          this.buttonName = 'dehaze';
        }
    }
}
