import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iridiumwebui';
  loader = true;

  ngOnInit() {
    setInterval(() => {
      this.loader = false;
    }, 1000);
  }
}
