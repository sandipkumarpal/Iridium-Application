import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { routerTransition } from './common/animations/router.animations';
import { AppAnimation } from './common/animations/app.animation';

@Component({
  selector: 'app-root',
  animations: [ routerTransition, AppAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[@AppAnimation]': ''
},
})
export class AppComponent implements OnInit {
  title = 'iridiumwebui';
  loader = true;
  headerActive: boolean = false;

  getState(outlet) {
    if(outlet.activatedRouteData.state === 'contact') {
      this.headerActive = true;
    }
    return outlet.activatedRouteData.state;
  }
  previousUrl: string;

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });

  }

  ngOnInit() {

  }
}
