import { Component, OnInit } from '@angular/core';

import { routerTransition } from './common/router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  title = 'iridiumwebui';
  loader = true;

  ngOnInit() {
    setInterval(() => {
      this.loader = false;
    }, 1000);
  }
}
