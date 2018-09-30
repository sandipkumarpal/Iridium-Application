import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './common/animations/router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  
  ngOnInit() {
    setInterval(() => {
      this.loader = false;
    }, 9000);

  }
}
